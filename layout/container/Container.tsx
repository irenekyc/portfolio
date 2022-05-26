import { FunctionComponent, ReactNode} from 'react'
import classnames from 'classnames'
import styles from './Container.module.scss'

interface ContainerProps{
  children: ReactNode
  isNarrow?: boolean
}

const Container:FunctionComponent<ContainerProps> = ({children, isNarrow, ...props}:ContainerProps)=>{
  return <div className={classnames(styles.ic__container,{
    [styles.ic__container__isNarrow]: isNarrow
  })} {...props}>
    {children}
  </div>
}

Container.defaultProps={
  isNarrow:false
}

export default Container