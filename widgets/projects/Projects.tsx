import { FunctionComponent} from 'react'
import Section from '../../layout/section'
import Heading from '../../components/heading'
import Container from '../../layout/container'
import styles from './Projects.module.scss'
import Image from 'next/image'

const Projects:FunctionComponent = ()=>{
  return <Section className={styles.ic__projects}>
    <Container>
    <Heading heading={2}>Projects</Heading>
    <div className={styles.ic__projects__row}>
      <div className={styles.ic__projects__projectItem}>
        <div className={styles.ic__projects__projectItem__card}>
          <div className={styles.ic__projects__projectItem__card__helperIcon}>
            <Image  src="/assets/icons/logo-javascript.svg" alt="react" height="36" width="36"/>
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
}

export default Projects