import { FunctionComponent } from 'react'
import Section from '../../layout/section'
import Heading from '../../components/heading'
import Container from '../../layout/container'
import Image from 'next/image'

import styles from './Hero.module.scss'

const Hero: FunctionComponent = () => {
  return (
    <Section className={styles.ic__hero}>
      {/* <Heading heading={2}>Hero</Heading>
    <p><a href='https://www.freepik.com/vectors/neon-city'>Neon city vector created by vectorpocket - www.freepik.com</a></p> */}
      <Container>
        <Heading heading={2}>Hi</Heading>
        <div className={styles.ic__hero__main}>
          <div className={styles.ic__hero__main__content}>
            <Heading heading={3}>My Name is Irene</Heading>
            <Heading heading={3}>Frontend Developer</Heading>
            <div className={styles.ic__hero__main__content__row}>
              <div className={styles.ic__hero__main__content__country}>
                <Image
                  src='/assets/countries/hk.svg'
                  alt='hk'
                  height='40'
                  width='70'
                />
              </div>
              <div className={styles.ic__hero__main__content__country}>
                <Image
                  src='/assets/countries/nl.svg'
                  alt='netherlands'
                  height='40'
                  width='70'
                />
              </div>
              <div className={styles.ic__hero__main__content__country}>
                <Image
                  src='/assets/countries/usa.svg'
                  alt='usa'
                  height='40'
                  width='70'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
