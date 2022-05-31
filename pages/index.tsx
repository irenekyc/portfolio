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
  dataError: boolean
}

export async function getServerSideProps() {
	let projects: ProjectDetailsType[] = []
	let libraries: LibraryDataType[] = []
	let dataError = false
	try {
		const projectRes = await axios.get(`${process.env.BASE_URL}/api/projects`, {
			headers: {
				Authorization: 'Bearer ' + process.env.API_SECRECT,
			},
		})
		projects = projectRes.data.projects
	} catch {
		dataError = true
	}

	try {
		const libraryRes = await axios.get(
			`${process.env.BASE_URL}/api/libraries`,
			{
				headers: {
					Authorization: 'Bearer ' + process.env.API_SECRECT,
				},
			}
		)
		libraries = libraryRes.data.libraries
	} catch {
		dataError = true
	}

	return {
		props: {
			libraries,
			projects,
			dataError,
		},
	}
}

const Home: NextPage<HomePageProps> = ({
	libraries,
	projects,
	dataError,
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
					<Libraries data={libraries} dataError={dataError} />
				</SwiperSlide>
				<SwiperSlide>
					<Projects projects={projects} dataError={dataError} />
				</SwiperSlide>
			</Swiper>
			<Contact />
			<Attributions />
		</div>
	)
}

export default Home
