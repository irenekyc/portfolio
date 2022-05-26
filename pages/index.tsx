import type { NextPage } from 'next'
import Heading from '../components/heading'
import Button from '../components/button'
import { BUTTON_VARIANT_OUTLINE } from '../constants/button'

const Home: NextPage = () => {
  return (
    <div>
      <Heading heading={1}>Hello World</Heading>
      <Button variant={BUTTON_VARIANT_OUTLINE}>Outline</Button>
    </div>
  )
}

export default Home
