import { screen, render} from '@testing-library/react'

import Bubble from '../index'
import { BUBBLE_COLOR_LIGHT, BUBBLE_COLOR_SECONDARY, BUBBLE_SIZE_LARGE, BUBBLE_SIZE_SMALL } from '../../../constants/bubble'

describe("Bubble", ()=>{
  const bubbleContent = <p>SomeContent</p>
  it('Render Bubble - default', ()=>{
    render(<Bubble data-testid="bubble">
      {bubbleContent}

    </Bubble>)

    const bubble = screen.getByTestId('bubble')
    expect(bubble).toBeInTheDocument()
    expect(bubble).toHaveTextContent('SomeContent')
    expect(bubble).toHaveClass('ic__bubble ic__bubble__colorPrimary')
  })
  it('Render Bubble - with props', ()=>{
    render(<Bubble data-testid="bubble" color={BUBBLE_COLOR_SECONDARY} size={BUBBLE_SIZE_LARGE}>
      {bubbleContent}

    </Bubble>)

    const bubble = screen.getByTestId('bubble')
    expect(bubble).toBeInTheDocument()
    expect(bubble).toHaveTextContent('SomeContent')
    expect(bubble).toHaveClass('ic__bubble ic__bubble__colorSecondary ic__bubble__sizeLarge')
  })
  it('Render Bubble - with props', ()=>{
    render(<Bubble data-testid="bubble" color={BUBBLE_COLOR_SECONDARY} size={BUBBLE_SIZE_LARGE}>
      {bubbleContent}

    </Bubble>)

    const bubble = screen.getByTestId('bubble')
    expect(bubble).toBeInTheDocument()
    expect(bubble).toHaveTextContent('SomeContent')
    expect(bubble).toHaveClass('ic__bubble ic__bubble__colorSecondary ic__bubble__sizeLarge')
  })

  it('Render Bubble - with props 2', ()=>{
    render(<Bubble data-testid="bubble" color={BUBBLE_COLOR_LIGHT} size={BUBBLE_SIZE_SMALL}>
      {bubbleContent}

    </Bubble>)

    const bubble = screen.getByTestId('bubble')
    expect(bubble).toBeInTheDocument()
    expect(bubble).toHaveTextContent('SomeContent')
    expect(bubble).toHaveClass('ic__bubble ic__bubble__sizeSmall')
  })
})
