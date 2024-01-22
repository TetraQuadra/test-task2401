import BurgerMenu from 'components/BurgerMenu/BurgerMenu'
import Button from 'components/Button/Button'
import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import React from 'react'
import styles from './Header.module.scss'

function Header() {
    return (
        <header className={`${styles.header} container`}>
            <Logo />
            <Navigation />
            <Button className={styles.button}>Button</Button>
            <BurgerMenu className={styles.burgerMenu} />
        </header>
    )
}

export default Header