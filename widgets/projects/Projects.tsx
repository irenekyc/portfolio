import { FunctionComponent, MouseEvent,  useState} from 'react'
import Section from '../../layout/section'
import Heading from '../../components/heading'
import Container from '../../layout/container'
import styles from './Projects.module.scss'
import Image from 'next/image'
import ProjectDetails from '../project-details'

const Projects:FunctionComponent = ()=>{
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false)
  const [projectModalDetails, setProjectModalDetails] = useState<undefined | string>(undefined)
const openProjectDetailsModal = (e:MouseEvent<HTMLButtonElement>)=>{
  const target = e.currentTarget as HTMLButtonElement
  const project = target.getAttribute('data-modal-open') || undefined

  setOpenProjectModal(true)
  setProjectModalDetails(project)
}

  return <>
  <ProjectDetails isOpen={openProjectModal} closeModal={()=> setOpenProjectModal(false)} projectName={projectModalDetails} />
  <Section className={styles.ic__projects}>
    <Container>
    <Heading heading={2}>Projects</Heading>
    <div className={styles.ic__projects__row}>
      <div className={styles.ic__projects__projectItem}>
      
        <div className={styles.ic__projects__projectItem__card}>
          <div className={styles.ic__projects__projectItem__card__helperIcon}>
            <Image  src="/assets/icons/logo-javascript.svg" alt="react" height="36" width="36"/>
            <button data-modal-open="renoon" onClick={openProjectDetailsModal}>Details</button>
          </div>
          <div className={styles.ic__projects__projectItem__card__thumbnail}>
          <Image src="/assets/projects/renoon/renoon-thumbnail.png" objectFit="cover" layout="fill" alt="renoon" />
</div>
        </div>
        </div>
        <div className={styles.ic__projects__projectItem}>
        <div className={styles.ic__projects__projectItem__card}>
        <div className={styles.ic__projects__projectItem__card__helperIcon}>
          
          <Image  src="/assets/icons/typescript.svg" alt="react" height="36" width="36"/>
 
         
        
        </div>
        <div className={styles.ic__projects__projectItem__card__thumbnail}>
        <Image src="/assets/projects/project-2/project2-thumbnail.png" objectFit="cover" layout="fill" alt="project2" />
</div>
        </div>
      </div>
      <div className={styles.ic__projects__projectItem}>
        <div className={styles.ic__projects__projectItem__card}>
        <div className={styles.ic__projects__projectItem__card__helperIcon}>
          
          <Image  src="/assets/icons/logo-javascript.svg" alt="react" height="36" width="36"/>
 
         
        
        </div>
        <div className={styles.ic__projects__projectItem__card__thumbnail}>
        <Image src="/assets/projects/GoTyme/gotyme-thumbnail.png" objectFit="cover" layout="fill" alt="project2" />
</div>
        </div>
      </div>
      <div className={styles.ic__projects__projectItem}>
        <div className={styles.ic__projects__projectItem__card}>
        <div className={styles.ic__projects__projectItem__card__helperIcon}>
          
          <Image  src="/assets/icons/typescript.svg" alt="react" height="36" width="36"/>

        </div>
        <div className={styles.ic__projects__projectItem__card__thumbnail}>
        <Image src="/assets/projects/sino/sino-thumbnail.png" objectFit="cover" layout="fill" alt="project2" />
</div>

        </div>
      </div>

    </div>
      </Container>
  </Section>
  </>
}

export default Projects