import { FunctionComponent, useEffect, useState } from 'react'
import Modal from '../../components/modal'
import styles from './ProjectDetails.module.scss'
import Image from 'next/image'
import Heading from '../../components/heading'

import {
  ProjectDetailsType,
  LibraryDateType,
} from '../../typings/ProjectDetails'
import Button from '../../components/button'

interface ProjectDetailsProps {
  isOpen: boolean
  closeModal: () => void
  projectName: string | undefined
}

const ProjectDetails: FunctionComponent<ProjectDetailsProps> = ({
  isOpen,
  closeModal,
  projectName,
  ...props
}: ProjectDetailsProps) => {
  const [projectDetails, setProjectDetails] = useState<
    undefined | ProjectDetailsType
  >(undefined)
  useEffect(() => {
    if (!projectName) return
    setProjectDetails({
      images: {
        thumbnail: '/assets/projects/renoon/renoon-thumbnail.png',
        mobile: '/assets/projects/renoon/renoon-mobile.png',
        desktop: '/assets/projects/renoon/renoon-2.png',
      },
      title: 'Renoon',
      description:
        'Renoon is a Amsterdam based Startup specializing in sustainable fashion. Renoon is a marketplace for sustainable fashion brands to reach wider customer bases. In 2020, they possess over 600 sustainable fashion brand partners and 1,200 active listed products.',
      libraries: [
        { title: 'NextJs', image: '/assets/icons/nextjs-black.svg' },
        { title: 'Redux', image: '/assets/icons/redux.svg' },
        { title: 'Auth0', image: '/assets/icons/libraries/auth0-icon.svg' },
        {
          title: 'Styled components',
          image: '/assets/icons/libraries/styled-components-black.svg',
        },
        { title: 'Agolia', image: '/assets/icons/libraries/algolia-3.svg' },
        {
          title: 'Mailchimp',
          image: '/assets/icons/libraries/mailchimp-black.png',
        },
        {
          title: 'GTM',
          image: '/assets/icons/libraries/google-tag-manager.svg',
        },
        {
          title: 'Google Analytics',
          image: '/assets/icons/libraries/google-analytics-4.svg',
        },
        {
          title: 'Cypress',
          image: '/assets/icons/libraries/cypress-black.png',
        },
        { title: 'Mixpanel', image: '/assets/icons/libraries/mixpanel.svg' },
      ],
      liveWebsite: undefined,
      industry: 'Ecommerce',
    })
  }, [projectName])
  if (!projectName) return null
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} {...props}>
      <div className={styles.ic__projectDetails}>
        {!projectDetails ? (
          <p>Loading</p>
        ) : (
          <>
            <div className={styles.ic__projectDetails__images}>
              <div className={styles.ic__projectDetails__images__desktop}>
                <div
                  className={
                    styles.ic__projectDetails__images__desktop__wrapper
                  }
                >
                  <Image
                    src={projectDetails.images.desktop}
                    alt={projectDetails.title}
                    objectFit='cover'
                    layout='fill'
                  />
                </div>
              </div>
              <div className={styles.ic__projectDetails__images__mobile}>
                <div
                  className={styles.ic__projectDetails__images__mobile__wrapper}
                >
                  <Image
                    src={projectDetails.images.mobile}
                    alt={projectDetails.title}
                    objectFit='contain'
                    layout='fill'
                  />
                </div>
              </div>
            </div>
            <div className={styles.ic__projectDetails__title}>
              <Heading heading={3}>{projectDetails.title}</Heading>
              <p>
                <strong>Industry: </strong>
                {projectDetails.industry}
              </p>
              <p>
                <strong>Demo:</strong>
                {projectDetails.liveWebsite ? (
                  <a href={projectDetails.liveWebsite}> Live Website</a>
                ) : (
                  <Button>Contact me</Button>
                )}
              </p>
            </div>
            <div className={styles.ic__projectDetails__descriptions}>
              <p>
                <strong>Description:</strong> {projectDetails.description}
              </p>
              <div>
                <strong>Libraries:</strong>
                <ul
                  className={
                    styles.ic__projectDetails__descriptions__librariesRow
                  }
                >
                  {projectDetails.libraries.map((library: LibraryDateType) => (
                    <li>
                      <Image
                        src={library.image}
                        alt={library.title}
                        layout='fill'
                        objectFit='contain'
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}

export default ProjectDetails
