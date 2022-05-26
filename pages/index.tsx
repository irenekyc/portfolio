import type { NextPage } from 'next'

import Hero from '../widgets/hero'
import Skills from '../widgets/skills'
import Projects from '../widgets/projects'
import Contact from '../widgets/contact'
import Libraries from '../widgets/libraries'

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<Skills />
			<Libraries />
			<Projects />
			<Contact />
		</>
	)
}

export default Home
