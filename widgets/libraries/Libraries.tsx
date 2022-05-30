import { FunctionComponent } from 'react'
import Section from '../../layout/section'
import Container from '../../layout/container'
import Heading from '../../components/heading'
import styles from './Libraries.module.scss'
import Bubble from '../../components/bubble'
import {
  BUBBLE_COLOR_SECONDARY,
  BUBBLE_SIZE_LARGE,
  BUBBLE_COLOR_PRIMARY,
  BUBBLE_SIZE_MEDIUM,
} from '../../constants/bubble'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { LibraryDataType } from '../../typings/ProjectDetails'

const logoBackgroundPurpleList = [
  'Styled Components',
  'Mailchimp',
  'Cypress',
  'Google Tag Manager',
  'React i18n',
]

interface LibrariesProps {
  data: LibraryDataType[]
}

const Libraries: FunctionComponent<LibrariesProps> = ({
  data,
}: LibrariesProps) => {
  return (
    <Section className={styles.ic__libraries}>
      <Container>
        <Heading heading={2}>I have worked with...</Heading>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          speed={3000}
          slidesPerGroupAuto={true}
          spaceBetween={0}
          slidesPerView={'auto'}
          className={styles.ic__libraries__bubblesRow}
          loop={true}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((library: LibraryDataType, index: number) => (
            <SwiperSlide
              className={styles.ic__libraries__bubbleWrapper}
              key={library.title}
            >
              <Bubble
                color={
                  logoBackgroundPurpleList.includes(library.title)
                    ? BUBBLE_COLOR_PRIMARY
                    : BUBBLE_COLOR_SECONDARY
                }
                size={index % 3 === 1 ? BUBBLE_SIZE_LARGE : BUBBLE_SIZE_MEDIUM}
              >
                <Image
                  src={library.image.white as string}
                  alt={library.title}
                  layout='fill'
                  objectFit='contain'
                />
              </Bubble>
            </SwiperSlide>
          ))}
          {/* 
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble color={BUBBLE_COLOR_SECONDARY}>
              <Image
                src='/assets/icons/libraries/auth0-icon.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>

          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble color={BUBBLE_COLOR_SECONDARY} size={BUBBLE_SIZE_LARGE}>
              <Image
                src='/assets/icons/libraries/bootstrap.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble>
              <Image
                src='/assets/icons/libraries/cypress.png'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble>
              <Image
                src='/assets/icons/libraries/google-analytics-4.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble>
              <Image
                src='/assets/icons/libraries/google-tag-manager.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble size={BUBBLE_SIZE_LARGE}>
              <Image
                src='/assets/icons/libraries/gsap-greensock.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble color={BUBBLE_COLOR_SECONDARY}>
              <Image
                src='/assets/icons/libraries/lottie.webp'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble>
              <Image
                src='/assets/icons/libraries/mailchimp.png'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble color={BUBBLE_COLOR_SECONDARY}>
              <Image
                src='/assets/icons/libraries/mixpanel.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble color={BUBBLE_COLOR_SECONDARY}>
              <Image
                src='/assets/icons/libraries/sass.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble color={BUBBLE_COLOR_SECONDARY}>
              <Image
                src='/assets/icons/libraries/react-i18n.png'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>

          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble color={BUBBLE_COLOR_SECONDARY}>
              <Image
                src='/assets/icons/libraries/strapi.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble color={BUBBLE_COLOR_SECONDARY} size={BUBBLE_SIZE_LARGE}>
              <Image
                src='/assets/icons/libraries/graphql.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble>
              <Image
                src='/assets/icons/libraries/styled-components.png'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide>
          <SwiperSlide className={styles.ic__libraries__bubbleWrapper}>
            <Bubble size={BUBBLE_SIZE_LARGE} color={BUBBLE_COLOR_SECONDARY}>
              <Image
                src='/assets/icons/libraries/swiper.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </Bubble>
          </SwiperSlide> */}
        </Swiper>
      </Container>
    </Section>
  )
}

export default Libraries
