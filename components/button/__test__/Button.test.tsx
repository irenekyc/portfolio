import { render, screen } from '@testing-library/react'
import Button from '../index'
import { BUTTON_SIZE_LARGE, BUTTON_VARIANT_PRIMARY, BUTTON_VARIANT_OUTLINE, BUTTON_COLOR_SECONDARY } from '../../../constants/button'

describe('Button', () => {
	const buttonText = 'button'
	it('Render Button', () => {
		render(
			<Button  data-testid="button">
				{buttonText}
			</Button>
		)
		const button = screen.getByTestId('button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent(buttonText)
	})
	it('Render Button with button props', () => {
		render(
			<Button  data-testid="button" disabled>
				{buttonText}
			</Button>
		)
		const button = screen.getByTestId('button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent(buttonText)
		expect(button).toHaveAttribute('disabled')
	})

	it('Render Button with variants - large size', () => {
		render(
			<Button  data-testid="button" size={BUTTON_SIZE_LARGE}>
				{buttonText}
			</Button>
		)
		const button = screen.getByTestId('button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('ic__button__sizeLarge')
	})

	it('Render Button with variants - variant primary', () => {
		render(
			<Button  data-testid="button" variant={BUTTON_VARIANT_PRIMARY}>
				{buttonText}
			</Button>
		)
		const button = screen.getByTestId('button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('ic__button__variantPrimary')
	})
 
	it('Render Button with variants - variant outline', () => {
		render(
			<Button  data-testid="button" variant={BUTTON_VARIANT_OUTLINE}>
				{buttonText}
			</Button>
		)
		const button = screen.getByTestId('button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('ic__button__variantOutline')
	})

	it('Render Button with variants - color secondary', () => {
		render(
			<Button  data-testid="button" color={BUTTON_COLOR_SECONDARY}>
				{buttonText}
			</Button>
		)
		const button = screen.getByTestId('button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('ic__button__colorSecondary')
	})
 
})
