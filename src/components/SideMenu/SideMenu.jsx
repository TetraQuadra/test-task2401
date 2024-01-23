import React, { useContext, useEffect } from 'react';
import { appContext } from 'AppContextProvider';
import styles from './SideMenu.module.scss';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';

function SideMenu() {
    const { handleToggleSideMenu } = useContext(appContext);

    const { isSideMenuOpen } = useContext(appContext)

    useEffect(() => {

        const handleResize = () => {
            // Закрываем модальное окно, если ширина вьюпорта больше указанного значения
            if (window.innerWidth > 768 && isSideMenuOpen) {
                handleToggleSideMenu();
            }
        };

        const onKeyDown = e => {
            if (e.code === 'Escape') {
                handleToggleSideMenu()
            }
        };

        document.addEventListener('keydown', onKeyDown);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, [handleToggleSideMenu, isSideMenuOpen]);

    return (
        <div className={styles.sideMenuOverlay}>
            <Header />
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contacts</a></li>
                </ul>
            </nav>
            <Button className={styles.button}>Button</Button>

        </div>
    );
}

export default SideMenu;
