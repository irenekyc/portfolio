import { FunctionComponent, useEffect, useState } from 'react'
import Modal from '../../components/modal'
import styles from './ProjectDetails.module.scss'
import Image from 'next/image'
import Heading from '../../components/heading'

import {
  ProjectDetailsType,
  LibraryDataType,
} from '../../typings/ProjectDetails'
import Button from '../../components/button'
import axios from 'axios'

interface ProjectDetailsProps {
  isOpen: boolean
  closeModal: () => void
  projectDetails: ProjectDetailsType | undefined
}

const ProjectDetails: FunctionComponent<ProjectDetailsProps> = ({
  isOpen,
  closeModal,
  projectDetails,
  ...props
}: ProjectDetailsProps) => {
  const [librariesLogo, setLibrariesLogo] = useState<LibraryDataType[]>([])

  const fetchLibraiesLogo = async (libraries: string[]) => {
    if (libraries.length === 0) return
    const librariesQuery = libraries
      .join('+')
      .toLowerCase()
      .replaceAll(' ', '-')

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/libraries?title=${librariesQuery}`,
      {
        headers: {
          Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_SECRET,
        },
      }
    )

    setLibrariesLogo(res.data.libraries)
  }
  useEffect(() => {
    if (!projectDetails) return

    fetchLibraiesLogo(projectDetails.libraries)
  }, [projectDetails])

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
              {librariesLogo.length > 0 && (
                <div>
                  <strong>Tech Stacks:</strong>
                  <ul
                    className={
                      styles.ic__projectDetails__descriptions__librariesRow
                    }
                  >
                    {librariesLogo.map((library: LibraryDataType) => (
                      <li key={library.title}>
                        <Image
                          src={library.image.black as string}
                          alt={library.title}
                          layout='fill'
                          objectFit='contain'
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}

export default ProjectDetails
