import { FunctionComponent} from 'react'
import Section from '../../layout/section'
import Container from '../../layout/container'
import Heading from '../../components/heading'
import styles from './Libraries.module.scss'
import Bubble from '../../components/bubble'
import { BUBBLE_COLOR_SECONDARY, BUBBLE_SIZE_LARGE } from '../../constants/bubble'
import Image from 'next/image'

const Libraries:FunctionComponent = ()=>{
  return <Section className={styles.ic__libraries}>
    <Container>
      <Heading heading={2}>I have worked with...</Heading>
      <div className={styles.ic__libraries__row}>
        <Bubble color={BUBBLE_COLOR_SECONDARY} size={BUBBLE_SIZE_LARGE}>
          <Image src="/assets/icons/libraries/algolia-3.svg" alt="" height="150" width="180" objectFit="contain"/>
        </Bubble>
        <Bubble color={BUBBLE_COLOR_SECONDARY}>
        <Image src="/assets/icons/libraries/auth0-icon.svg" alt="" height="150" width="120" objectFit="contain"/>
          </Bubble>
          <Bubble color={BUBBLE_COLOR_SECONDARY}>
          <Image src="/assets/icons/libraries/bootstrap.svg" alt="" height="150" width="120" objectFit="contain"/>
</Bubble>
          <Bubble>
          <Image src="/assets/icons/libraries/cypress.png" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble>
          <Image src="/assets/icons/libraries/google-analytics-4.svg" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble>
          <Image src="/assets/icons/libraries/google-tag-manager.svg" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble>
          <Image src="/assets/icons/libraries/gsap-greensock.svg" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble  color={BUBBLE_COLOR_SECONDARY}>
          <Image src="/assets/icons/libraries/lottie.webp" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble >
          <Image src="/assets/icons/libraries/mailchimp.png" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble color={BUBBLE_COLOR_SECONDARY}>
          <Image src="/assets/icons/libraries/mixpanel.svg" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble color={BUBBLE_COLOR_SECONDARY}>
          <Image src="/assets/icons/libraries/sass.svg" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble color={BUBBLE_COLOR_SECONDARY}>
          <Image src="/assets/icons/libraries/react-i18n.png" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble color={BUBBLE_COLOR_SECONDARY}>
          <Image src="/assets/icons/libraries/strapi.svg" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble color={BUBBLE_COLOR_SECONDARY}>
          <Image src="/assets/icons/libraries/graphql.svg" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
          <Bubble >
          <Image src="/assets/icons/libraries/styled-components.png" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>

          <Bubble >
          <Image src="/assets/icons/libraries/swiper.svg" alt="" height="150" width="120" objectFit="contain"/>
          
          </Bubble>
        
      </div>
      </Container>
  </Section>
}

export default Libraries