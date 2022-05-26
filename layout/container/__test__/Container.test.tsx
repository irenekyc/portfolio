import { screen, render} from '@testing-library/react'

import Container from '../index'

describe("Bubble", ()=>{
  const containerContent = <p>SomeContent</p>
  it('Render container - default', ()=>{
    render(<Container data-testid="container">
      {containerContent}

    </Container>)

    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('SomeContent')
    expect(container).toHaveClass('ic__container')
    expect(container).not.toHaveClass('ic__container__isNarrow')
  })  
  
  it('Render container - is Narrow', ()=>{
    render(<Container data-testid="container" isNarrow>
      {containerContent}

    </Container>)

    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('SomeContent')
    expect(container).toHaveClass('ic__container')
    expect(container).toHaveClass('ic__container__isNarrow')
  })
})