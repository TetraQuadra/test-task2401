import { appContext } from 'AppContextProvider'
import React, { useContext } from 'react'
import styles from './Button.module.scss'

function Button({ children, className, ...props }) {
    const { updateCounter } = useContext(appContext)

    return (
        <button className={`${styles.button} ${className}`} type="button" onClick={() => updateCounter()} {...props} >{children}</button>
    )
}

export default Button