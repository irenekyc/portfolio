import { FunctionComponent, useState } from 'react'
import classnames from 'classnames'

import Button from '../../components/button'
import {
  BUTTON_VARIANT_OUTLINE,
  BUTTON_SIZE_SMALL,
  BUTTON_COLOR_SECONDARY,
} from '../../constants/button'
import styles from './Attributions.module.scss'

const Attributions: FunctionComponent = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  return (
    <>
      <Button
        onClick={() => setIsOpened(!isOpened)}
        size={BUTTON_SIZE_SMALL}
        color={BUTTON_COLOR_SECONDARY}
        className={styles.ic__attributions__button}
      >
        <div
          className={classnames(styles.ic__attributions__button__chevron, {
            [styles.ic__attributions__button__chevronActive]: isOpened,
          })}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
            <path d='M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z' />
          </svg>
        </div>

        <span>Attributions</span>
      </Button>
      <div
        className={classnames(styles.ic__attributions__content, {
          [styles.ic__attributions__contentActive]: isOpened,
        })}
      >
        <span>
          <strong>Hero Image :</strong>{' '}
          <a href='http://www.freepik.com'>
            Designed by vectorpocket / Freepik
          </a>
        </span>
        <span>
          <strong>Icons:</strong> Fontawesome
        </span>
      </div>
    </>
  )
}

export default Attributions
