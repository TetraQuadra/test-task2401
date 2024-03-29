import React from 'react'
import styles from './BurgerMenu.module.scss'
import { ReactComponent as LogoIcon } from 'images/icons/burger.svg';
import { ReactComponent as CrossIcon } from 'images/icons/cross.svg';
import { useContext } from 'react';
import { appContext } from 'AppContextProvider';

function BurgerMenu({ className }) {
    const { isSideMenuOpen, handleToggleSideMenu } = useContext(appContext)
    return (
        <button className={`${styles.menuButton} ${className}`} onClick={() => handleToggleSideMenu()}>
            {isSideMenuOpen ? <CrossIcon /> : <LogoIcon />}
        </button>
    )
}

export default BurgerMenu