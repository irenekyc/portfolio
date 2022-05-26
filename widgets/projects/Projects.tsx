import { FunctionComponent} from 'react'
import Section from '../../layout/section'
import Heading from '../../components/heading'
import Container from '../../layout/container'
import styles from './Projects.module.scss'

const Projects:FunctionComponent = ()=>{
  return <Section className={styles.ic__projects}>
    <Container>
    <Heading heading={2}>Projects</Heading>
    <div className={styles.ic__projects__row}>
      <div className={styles.ic__projects__projectItem}>
        <div className={styles.ic__projects__projectItem__card}>

        </div>
        </div>
        <div className={styles.ic__projects__projectItem}>
        <div className={styles.ic__projects__projectItem__card}>

        </div>
      </div>
      <div className={styles.ic__projects__projectItem}>
        <div className={styles.ic__projects__projectItem__card}>

        </div>
      </div>
      <div className={styles.ic__projects__projectItem}>
        <div className={styles.ic__projects__projectItem__card}>

        </div>
      </div>

    </div>
      </Container>
  </Section>
}

export default Projects