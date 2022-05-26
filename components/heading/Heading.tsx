import { FunctionComponent, ReactNode } from 'react'
import { VARIANT_PRIMARY, VARIANT_SECONDARY } from '../../constants/theme'
import classnames from 'classnames'
import styles from './Heading.module.scss'

interface HeadingProps {
  heading: 1 | 2 | 3 | 4 | 5;
  children: ReactNode | string;
  variant?: typeof VARIANT_PRIMARY | typeof VARIANT_SECONDARY;
}

const Heading: FunctionComponent<HeadingProps> = ({
	heading,
	children,
	variant = VARIANT_PRIMARY,
	...props
}: HeadingProps) => {
	const classNames = classnames(styles.ic__heading, {
		[styles.ic__heading__h1]: heading === 1,
		[styles.ic__heading__h2]: heading === 2,
		[styles.ic__heading__h3]: heading === 3,
		[styles.ic__heading__h4]: heading === 4,
		[styles.ic__heading__h5]: heading === 5,
		[styles.ic__heading__primary]: variant === VARIANT_PRIMARY,
		[styles.ic__heading__secondary]: variant === VARIANT_SECONDARY,
	})
	if (heading === 1) {
		return (
			<h1 className={classNames} {...props}>
				{children}
			</h1>
		)
	}
	if (heading === 2) {
		return (
			<h2 className={classNames} {...props}>
				{children}
			</h2>
		)
	}
	if (heading === 3) {
		return (
			<h3 className={classNames} {...props}>
				{children}
			</h3>
		)
	}
	if (heading === 4) {
		return (
			<h4 className={classNames} {...props}>
				{children}
			</h4>
		)
	}
	if (heading === 5) {
		return (
			<h5 className={classNames} {...props}>
				{children}
			</h5>
		)
	}
	return (
		<span className={classNames} {...props}>
			{children}
		</span>
	)
}

export default Heading
