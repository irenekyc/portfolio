import { FunctionComponent, MouseEvent, useState } from 'react'
import Section from '../../layout/section'
import Heading from '../../components/heading'
import Container from '../../layout/container'
import styles from './Projects.module.scss'
import Image from 'next/image'
import ProjectDetails from '../project-details'
import Button from '../../components/button'

const Projects: FunctionComponent = () => {
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false)
  const [projectModalDetails, setProjectModalDetails] = useState<
    undefined | string
  >(undefined)
  const openProjectDetailsModal = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    const project = target.getAttribute('data-modal-open') || undefined
    setOpenProjectModal(true)
    setProjectModalDetails(project)
  }

  const closeProjectModal = () => {
    setOpenProjectModal(false)
    setProjectModalDetails(undefined)
  }

  return (
    <>
      <ProjectDetails
        isOpen={openProjectModal}
        closeModal={closeProjectModal}
        projectName={projectModalDetails}
      />
      <Section className={styles.ic__projects}>
        <Container>
          <Heading heading={2}>Projects</Heading>
          <div className={styles.ic__projects__row}>
            <div className={styles.ic__projects__projectItem}>
              <button
                className={styles.ic__projects__projectItem__card}
                data-modal-open='renoon'
                onClick={openProjectDetailsModal}
              >
                <div
                  className={styles.ic__projects__projectItem__card__helperIcon}
                >
                  <Image
                    src='/assets/icons/logo-javascript.svg'
                    alt='react'
                    height='36'
                    width='36'
                  />
                </div>
                <div
                  className={styles.ic__projects__projectItem__card__thumbnail}
                >
                  <Image
                    src='/assets/projects/renoon/renoon-thumbnail.png'
                    objectFit='cover'
                    layout='fill'
                    alt='renoon'
                  />
                </div>
              </button>
            </div>
            <div className={styles.ic__projects__projectItem}>
              <button
                className={styles.ic__projects__projectItem__card}
                data-modal-open='renoon'
                onClick={openProjectDetailsModal}
              >
                <div
                  className={styles.ic__projects__projectItem__card__helperIcon}
                >
                  <Image
                    src='/assets/icons/typescript.svg'
                    alt='react'
                    height='36'
                    width='36'
                  />
                </div>
                <div
                  className={styles.ic__projects__projectItem__card__thumbnail}
                >
                  <Image
                    src='/assets/projects/project-2/project2-thumbnail.png'
                    objectFit='cover'
                    layout='fill'
                    alt='project2'
                  />
                </div>
              </button>
            </div>
            <div className={styles.ic__projects__projectItem}>
              <button
                className={styles.ic__projects__projectItem__card}
                data-modal-open='renoon'
                onClick={openProjectDetailsModal}
              >
                <div
                  className={styles.ic__projects__projectItem__card__helperIcon}
                >
                  <Image
                    src='/assets/icons/logo-javascript.svg'
                    alt='react'
                    height='36'
                    width='36'
                  />
                </div>
                <div
                  className={styles.ic__projects__projectItem__card__thumbnail}
                >
                  <Image
                    src='/assets/projects/GoTyme/gotyme-thumbnail.png'
                    objectFit='cover'
                    layout='fill'
                    alt='project2'
                  />
                </div>
              </button>
            </div>
            <div className={styles.ic__projects__projectItem}>
              <button
                className={styles.ic__projects__projectItem__card}
                data-modal-open='renoon'
                onClick={openProjectDetailsModal}
              >
                <div
                  className={styles.ic__projects__projectItem__card__helperIcon}
                >
                  <Image
                    src='/assets/icons/typescript.svg'
                    alt='react'
                    height='36'
                    width='36'
                  />
                </div>
                <div
                  className={styles.ic__projects__projectItem__card__thumbnail}
                >
                  <Image
                    src='/assets/projects/sino/sino-thumbnail.png'
                    objectFit='cover'
                    layout='fill'
                    alt='project2'
                  />
                </div>
              </button>
            </div>
          </div>
          <Button>Understand more</Button>
        </Container>
      </Section>
    </>
  )
}

export default Projects
