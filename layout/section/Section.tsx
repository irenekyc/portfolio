import { FunctionComponent, ReactNode} from 'react'
import styles from './Section.module.scss'
import classnames from 'classnames'

interface SectionProps{
  children:ReactNode
  className?:string
}

const Section:FunctionComponent<SectionProps> = ({children, className, ...props}:SectionProps)=>{
return <div className={classnames(className, styles.ic__section)} {...props}>
{children}
</div>
}

Section.defaultProps={
  className:''
}

export default Section