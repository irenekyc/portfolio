import { render, screen } from '@testing-library/react'
import Heading from '../Heading'
import { VARIANT_SECONDARY } from '../../../constants/theme'

describe('Heading', () => {
	const headingText = 'heading text'
	it('Render Heading', () => {
		render(
			<Heading heading={1} data-testid="heading">
				{headingText}
			</Heading>
		)

		const heading = screen.getByTestId('heading')
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveTextContent(headingText)
	})
	it('Render Heading with correct classes', () => {
		render(
			<Heading heading={1} data-testid="heading">
				{headingText}
			</Heading>
		)

		const heading = screen.getByTestId('heading')
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveClass(
			'ic__heading ic__heading__h1 ic__heading__primary'
		)
	})
	it('Render Heading with correct classes - h2', () => {
		render(
			<Heading heading={2} data-testid="heading" variant={VARIANT_SECONDARY}>
				{headingText}
			</Heading>
		)

		const heading = screen.getByTestId('heading')
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveClass(
			'ic__heading ic__heading__h2 ic__heading__secondary'
		)
	})
	it('Render Heading with correct classes - h3', () => {
		render(
			<Heading heading={3} data-testid="heading">
				{headingText}
			</Heading>
		)

		const heading = screen.getByTestId('heading')
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveClass('ic__heading ic__heading__h3')
	})
	it('Render Heading with correct classes - h4', () => {
		render(
			<Heading heading={4} data-testid="heading">
				{headingText}
			</Heading>
		)

		const heading = screen.getByTestId('heading')
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveClass('ic__heading ic__heading__h4')
	})

	it('Render Heading with correct classes  - h5', () => {
		render(
			<Heading heading={5} data-testid="heading">
				{headingText}
			</Heading>
		)

		const heading = screen.getByTestId('heading')
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveClass('ic__heading ic__heading__h5')
	})
})
