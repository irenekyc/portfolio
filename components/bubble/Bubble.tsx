import { FunctionComponent, ReactNode } from 'react'
import classnames from 'classnames'
import styles from './Bubble.module.scss'
import {
	BUBBLE_COLOR_PRIMARY,
	BUBBLE_COLOR_SECONDARY,
	BUBBLE_COLOR_LIGHT,
	BUBBLE_SIZE_SMALL,
	BUBBLE_SIZE_MEDIUM,
	BUBBLE_SIZE_LARGE,
} from '../../constants/bubble'

interface BubbleProps {
  children: ReactNode
  className?: string
  color?:
    | typeof BUBBLE_COLOR_PRIMARY
    | typeof BUBBLE_COLOR_SECONDARY
    | typeof BUBBLE_COLOR_LIGHT
  size?:
    | typeof BUBBLE_SIZE_SMALL
    | typeof BUBBLE_SIZE_MEDIUM
    | typeof BUBBLE_SIZE_LARGE
}

const Bubble: FunctionComponent<BubbleProps> = ({
	children,
	className,
	color,
	size,
	...props
}: BubbleProps) => {
	const classNames = classnames(className, styles.ic__bubble, {
		[styles.ic__bubble__colorPrimary]: color === BUBBLE_COLOR_PRIMARY,
		[styles.ic__bubble__colorSecondary]: color === BUBBLE_COLOR_SECONDARY,
		[styles.ic__bubble__sizeLarge]: size === BUBBLE_SIZE_LARGE,
		[styles.ic__bubble__sizeSmall]: size === BUBBLE_SIZE_SMALL,
	})
	return (
		<div className={classNames} {...props}>
			<div className={styles.ic__bubble__wrapper}>{children}</div>
		</div>
	)
}

Bubble.defaultProps = {
	className: '',
	color: BUBBLE_COLOR_PRIMARY,
	size: BUBBLE_SIZE_MEDIUM,
}

export default Bubble
