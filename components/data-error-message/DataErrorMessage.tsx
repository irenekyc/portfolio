import { FunctionComponent } from 'react'
import Heading from '../heading'
import styles from './DataErrorMessage.module.scss'

const DataErrorMessage: FunctionComponent = () => {
	return (
		<Heading heading={3} className={styles.ic__dataError}>
      Opps, something wrong with data. Please try refresh. If problem persist,
      contact me{' '}
			<a
				className={styles.ic__dataError__contact}
				href='mailto:irenekayuc@gmail.com'
			>
        here
			</a>
      .
		</Heading>
	)
}
export default DataErrorMessage
