import { screen, render} from '@testing-library/react'

import Section from '../index'

describe('Section', ()=>{
  it('Render Section', ()=>{
    render(<Section data-testid="section">
      <p>Some Content</p>
    </Section>)
const section = screen.getByTestId('section')
expect(section).toBeInTheDocument()
expect(section).toHaveClass('ic__section')
  })  
  it('Render Section - with classname', ()=>{
    render(<Section data-testid="section" className="some-classname">
      <p>Some Content</p>
    </Section>)
const section = screen.getByTestId('section')
expect(section).toBeInTheDocument()
expect(section).toHaveClass('ic__section')
expect(section).toHaveClass('some-classname')
  })
})