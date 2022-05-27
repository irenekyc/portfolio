import type { NextPage } from 'next'

import Hero from '../widgets/hero'
import Skills from '../widgets/skills'
import Projects from '../widgets/projects'
import Contact from '../widgets/contact'
import Libraries from '../widgets/libraries'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper'

const Home: NextPage = () => {
	return (
		<>
			<Swiper
				modules={[Mousewheel, Pagination]}
				pagination={{ clickable: true }}
				spaceBetween={0}
				slidesPerView={1}
				direction={'vertical'}
				mousewheel={true}
				style={{ height: '100vh' }}
			>
				<SwiperSlide>
					<Hero />
				</SwiperSlide>
				<SwiperSlide>
					<Skills />
				</SwiperSlide>

				<SwiperSlide>
					<Libraries />
				</SwiperSlide>
				<SwiperSlide>
					<Projects />
				</SwiperSlide>
			</Swiper>
			<Contact />
		</>
	)
}

export default Home
