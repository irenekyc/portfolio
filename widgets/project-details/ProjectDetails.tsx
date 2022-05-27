import { FunctionComponent, useEffect, useState} from 'react'
import Modal from '../../components/modal'
import styles from './ProjectDetails.module.scss'
import Image from 'next/image'
import Heading from '../../components/heading'
import { ProjectDetailsType } from '../../typings/ProjectDetails'

interface ProjectDetailsProps{
  isOpen:boolean
  closeModal: ()=>void
  projectName: string | undefined
}

const ProjectDetails :FunctionComponent<ProjectDetailsProps> = ({
  isOpen,
  closeModal,
  projectName,
  ...props
}:ProjectDetailsProps)=>{
  const [projectDetails, setProjectDetails] = useState<undefined|ProjectDetailsType>(undefined)
  useEffect(()=>{
    if (!projectName) return
    setProjectDetails({
      images: {
        thumbnail: '/assets/projects/renoon/renoon-thumbnail.png',
        mobile: '/assets/projects/renoon/renoon-mobile.png',
        desktop: '/assets/projects/renoon/renoon-2.png',
      },
      title: "Renoon",
      description: "Description: Renoon is a Amsterdam based Startup specializing in sustainable fashion. Renoon is a marketplace for sustainable fashion brands to reach wider customer bases. In 2020, they possess over 600 sustainable fashion brand partners and 1,200 active listed products.",
      libraries: [	"Nextjs",
        	"Auth0",
        	"Javascript",
       "Styled components",
       	"Agolia",
        "Mailchimp",
       " GTM/GA",
        "Cypress",
       "Mixpanel",
      "	Reudx"
        ],
      liveWebsite: undefined,
      industry: "Ecommerce"
    })

  }, [projectName])
  if (!projectName) return null
  return <Modal isOpen={isOpen} closeModal={closeModal} {...props}>
    <div className={styles.ic__projectDetails}>
      {
        !projectDetails ? <p>Loading</p>
        :
        <>
        <div className={styles.ic__projectDetails__images}>
        <div className={styles.ic__projectDetails__images__desktop}>
        <div className={styles.ic__projectDetails__images__desktop__wrapper}>
          <Image src={projectDetails.images.desktop} alt={projectDetails.title} objectFit="cover" layout="fill"/>
        </div>

        </div>
        <div className={styles.ic__projectDetails__images__mobile}>
        <div className={styles.ic__projectDetails__images__mobile__wrapper}>
        <Image src={projectDetails.images.mobile} alt={projectDetails.title} objectFit="contain" layout="fill"/>
        </div>
        </div>

      </div>
      <div className={styles.ic__projectDetails__title}>
        <Heading heading={3}>{projectDetails.title}</Heading>
        <p>Industry: {projectDetails.industry}</p>
        <p>{projectDetails.liveWebsite ? <a href={projectDetails.liveWebsite}> Live Website</a> :<p>Contact me for demo</p>}</p>
        
        </div>
        <div className={styles.ic__projectDetails__descriptions}>
          <p>Description: {projectDetails.description}</p>
<ul>{projectDetails.libraries.map((library)=><li>{library}</li>)}</ul>
        </div>
        </>
      }
      
    </div>

    </Modal>

}

export default ProjectDetails