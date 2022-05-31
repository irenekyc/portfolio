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
import DataErrorMessage from '../../components/data-error-message'

const logoBackgroundPurpleList = [
  'Styled Components',
  'Mailchimp',
  'Cypress',
  'Google Tag Manager',
  'React i18n',
]

interface LibrariesProps {
  data: LibraryDataType[]
  dataError: boolean
}

const Libraries: FunctionComponent<LibrariesProps> = ({
  data,
  dataError,
}: LibrariesProps) => {
  if (data.length === 0 && dataError) {
    return (
      <Section className={styles.ic__libraries}>
        <Container>
          <DataErrorMessage />
        </Container>
      </Section>
    )
  }
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
        </Swiper>
      </Container>
    </Section>
  )
}

export default Libraries
