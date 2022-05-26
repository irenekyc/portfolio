import { FunctionComponent} from 'react'
import Section from '../../layout/section'
import Heading from '../../components/heading'

const Hero:FunctionComponent = ()=>{
  return <Section>
    <Heading heading={2}>Hero</Heading>
    <p><a href='https://www.freepik.com/vectors/neon-city'>Neon city vector created by vectorpocket - www.freepik.com</a></p>

  </Section>
}

export default Hero