import React from 'react'
import styles from './Navigation.module.scss'

function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><a href="/">Features</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default Navigation