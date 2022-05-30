import React from 'react'
import styles from './Button.module.css'

const Button = ({children, ...props}) => { // children - recuperar o valor 
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}

export default Button