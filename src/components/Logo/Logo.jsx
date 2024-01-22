import React from 'react'
import { ReactComponent as LogoIcon } from 'images/icons/logo.svg';
import styles from "./Logo.module.scss";

function Logo() {
    return (
        <div className={styles.logoWrapper}><LogoIcon />
            <span className={styles.logoSpan}>Logo</span></div>
    )
}

export default Logo