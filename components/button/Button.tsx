import { FunctionComponent, ButtonHTMLAttributes} from 'react'
import { BUTTON_SIZE_LARGE, BUTTON_SIZE_MEDIUM, BUTTON_SIZE_SMALL, BUTTON_COLOR_PRIMARY, BUTTON_COLOR_SECONDARY, BUTTON_VARIANT_PRIMARY, BUTTON_VARIANT_OUTLINE } from '../../constants/button'
import classnames from 'classnames'
import styles from './Button.module.scss'

type ButtonTypes =  HTMLButtonElement


export interface ButtonProps<T extends ButtonTypes>
  extends
    ButtonHTMLAttributes<T> {
      size?: typeof BUTTON_SIZE_LARGE | typeof BUTTON_SIZE_MEDIUM | typeof BUTTON_SIZE_SMALL
      color?: typeof BUTTON_COLOR_PRIMARY | typeof BUTTON_COLOR_SECONDARY
      variant?: typeof BUTTON_VARIANT_PRIMARY | typeof BUTTON_VARIANT_OUTLINE
  type?: ButtonHTMLAttributes<T>['type']
}

const Button: FunctionComponent<ButtonProps<ButtonTypes>> = <
  T extends ButtonTypes
>({
		children,
		size,
		color,
		variant,
		...buttonProps
	}: ButtonProps<T>) => {
	const classNames = classnames(styles.ic__button, {
		[styles.ic__button__sizeSmall]: size === BUTTON_SIZE_SMALL,
		[styles.ic__button__sizeMedium]: size === BUTTON_SIZE_MEDIUM,
		[styles.ic__button__sizeLarge]: size === BUTTON_SIZE_LARGE,
		[styles.ic__button__colorPrimary]: color === BUTTON_COLOR_PRIMARY,
		[styles.ic__button__colorSecondary]: color === BUTTON_COLOR_SECONDARY,
		[styles.ic__button__variantPrimary]: variant === BUTTON_VARIANT_PRIMARY,
		[styles.ic__button__variantOutline]: variant === BUTTON_VARIANT_OUTLINE
	})


	return (
		<button className={classNames} {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}>
			{children}
		</button>
	)
}
Button.defaultProps = {
	size: BUTTON_SIZE_MEDIUM,
	color: BUTTON_COLOR_PRIMARY,
	variant: BUTTON_VARIANT_PRIMARY

}

export default Button
