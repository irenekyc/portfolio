import { FunctionComponent, MouseEvent, useState } from 'react'
import Section from '../../layout/section'
import Heading from '../../components/heading'
import Container from '../../layout/container'
import styles from './Projects.module.scss'
import Image from 'next/image'
import ProjectDetails from '../project-details'
import Button from '../../components/button'
import {
  ProjectDetailsType,
  ProjectLanguageType,
} from '../../typings/ProjectDetails'
import DataErrorMessage from '../../components/data-error-message'

interface ProjectsProps {
  projects: ProjectDetailsType[]
  dataError: boolean
}

const Projects: FunctionComponent<ProjectsProps> = ({
  projects,
  dataError,
}: ProjectsProps) => {
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false)
  const [projectModalDetails, setProjectModalDetails] = useState<
    undefined | ProjectDetailsType
  >(undefined)
  const openProjectDetailsModal = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    const projectId = target.getAttribute('data-modal-open') || undefined
    setOpenProjectModal(true)
    setProjectModalDetails(
      projects.filter(
        (project: ProjectDetailsType) => project.id === projectId
      )[0]
    )
  }

  const closeProjectModal = () => {
    setOpenProjectModal(false)
    setProjectModalDetails(undefined)
  }

  const renderLanguageLogo = (language: ProjectLanguageType): JSX.Element => {
    switch (language) {
      case 'typescript':
        return (
          <Image
            src='/assets/icons/typescript.svg'
            alt='typescript'
            height='36'
            width='36'
          />
        )
      case 'javascript':
        return (
          <Image
            src='/assets/icons/logo-javascript.svg'
            alt='javascript'
            height='36'
            width='36'
          />
        )
      default:
        return <></>
    }
  }

  if (projects.length === 0 && dataError) {
    return (
      <Section className={styles.ic__projects}>
        <Container>
          <DataErrorMessage />
        </Container>
      </Section>
    )
  }

  return (
    <>
      <ProjectDetails
        isOpen={openProjectModal}
        closeModal={closeProjectModal}
        projectDetails={projectModalDetails}
      />
      <Section className={styles.ic__projects}>
        <Container>
          <Heading heading={2}>Projects</Heading>
          <div className={styles.ic__projects__row}>
            {projects.map((project: ProjectDetailsType) => (
              <div
                className={styles.ic__projects__projectItem}
                key={project.id}
              >
                <button
                  className={styles.ic__projects__projectItem__card}
                  data-modal-open={project.id}
                  onClick={openProjectDetailsModal}
                >
                  <div
                    className={
                      styles.ic__projects__projectItem__card__helperIcon
                    }
                  >
                    {renderLanguageLogo(project.language)}
                  </div>
                  <div
                    className={
                      styles.ic__projects__projectItem__card__thumbnail
                    }
                  >
                    <Image
                      src={project.images.thumbnail}
                      objectFit='cover'
                      layout='fill'
                      alt={project.id}
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
          <Button>Understand more</Button>
        </Container>
      </Section>
    </>
  )
}

export default Projects
