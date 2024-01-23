import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <ul className={styles.linkList}>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Privacy Notice</a></li>
                    <li><a href="/">Company</a></li>
                    <li><a href="/">EULA</a></li>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Uninstall</a></li>
                    <li><a href="/">Cookie</a></li>
                    <li><a href="/">Policy</a></li>
                    <li><a href="/">Refund Policy</a></li>
                </ul>
                <p className={styles.copyright}>Copyright © All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer