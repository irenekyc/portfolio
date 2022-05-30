import type { NextPage } from 'next'

import Hero from '../widgets/hero'
import Skills from '../widgets/skills'
import Projects from '../widgets/projects'
import Contact from '../widgets/contact'
import Libraries from '../widgets/libraries'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper'
import Attributions from '../widgets/attributions'
import axios from 'axios'
import { LibraryDataType, ProjectDetailsType } from '../typings/ProjectDetails'

interface HomePageProps {
  libraries: LibraryDataType[]
  projects: ProjectDetailsType[]
}

export async function getServerSideProps() {
	const projectRes = await axios.get('http://localhost:3000/api/projects')
	const libraryRes = await axios.get('http://localhost:3000/api/libraries')

	return {
		props: {
			libraries: libraryRes.data.libraries,
			projects: projectRes.data.projects,
		},
	}
}

const Home: NextPage<HomePageProps> = ({
	libraries,
	projects,
}: HomePageProps) => {
	return (
		<div className='ic-main'>
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
					<Libraries data={libraries} />
				</SwiperSlide>
				<SwiperSlide>
					<Projects projects={projects} />
				</SwiperSlide>
			</Swiper>
			<Contact />
			<Attributions />
		</div>
	)
}

export default Home
