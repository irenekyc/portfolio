import { FunctionComponent} from 'react'
import Image from 'next/image'
import Section from '../../layout/section'
import Container from '../../layout/container'


import styles from './Skills.module.scss'
import Heading from '../../components/heading'
import { VARIANT_SECONDARY, VARIANT_PRIMARY } from '../../constants/theme'

const Skills:FunctionComponent = ()=>{
  return <Section className={styles.ic__skills}>
    <Container>
      <Heading className={styles.ic__skills__heading} heading={2}>I am specialised in</Heading>
      <div className={styles.ic__skills__row}>
        <div className={styles.ic__skills__content}>
          <div className={styles.ic__skills__content__logo}>
          <Image src={'/assets/icons/React-icon.svg'} alt="react" height="180" width="180" objectFit="contain"/>
          </div>

          {/* <Heading heading={3} variant={VARIANT_PRIMARY} className={styles.ic__skills__content__heading}>React</Heading> */}

        </div>
        <div className={styles.ic__skills__content}>
        <div className={styles.ic__skills__content__logo}>
        <Image src={'/assets/icons/nextjs.svg'} alt="next js" height="180" width="180" objectFit="contain"/>
        
          </div>
            {/* <Heading heading={3} variant={VARIANT_PRIMARY} className={styles.ic__skills__content__heading}>Next Js</Heading> */}
          </div>
          <div className={styles.ic__skills__content}>
          <div className={styles.ic__skills__content__logo}>
          <Image src={'/assets/icons/redux.svg'} alt="solidity blockchain" height="180" width="180" objectFit="contain"/>
          </div>
          {/* <Heading heading={3} variant={VARIANT_PRIMARY} className={styles.ic__skills__content__heading}>Smart Contract</Heading> */}
          
          </div>
          <div className={styles.ic__skills__content}>
          <div className={styles.ic__skills__content__logo}>
          <Image src={'/assets/icons/typescript.svg'} alt="solidity blockchain" height="180" width="180" objectFit="contain"/>
          </div>
          {/* <Heading heading={3} variant={VARIANT_PRIMARY} className={styles.ic__skills__content__heading}>Smart Contract</Heading> */}
          
          </div>
          <div className={styles.ic__skills__content}>
          <div className={styles.ic__skills__content__logo}>
          <Image src={'/assets/icons/webflow-logo-white.svg'} alt="webflow" height="180" width="180" objectFit="contain"/>
          </div>
          {/* <Heading heading={3} variant={VARIANT_PRIMARY} className={styles.ic__skills__content__heading}>Webflow</Heading> */}
          
          </div>
          <div className={styles.ic__skills__content}>
          <div className={styles.ic__skills__content__logo}>
          <Image src={'/assets/icons/solidity.svg'} alt="solidity blockchain" height="180" width="180" objectFit="contain"/>
          </div>
          {/* <Heading heading={3} variant={VARIANT_PRIMARY} className={styles.ic__skills__content__heading}>Smart Contract</Heading> */}
          
          </div>

        </div>
      <p>More...</p>
      </Container>
  </Section>
}

export default Skills