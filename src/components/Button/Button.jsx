import { appContext } from 'AppContextProvider';
import React, { useContext } from 'react';
import styles from './Button.module.scss';

function Button({ children, appearance = 'primary', className, ...props }) {
    const { updateCounter } = useContext(appContext);

    const validAppearance = ['primary', 'secondary'];

    const isValidStyle = validAppearance.includes(appearance);

    const buttonClassName = `${styles.button} ${className} ${isValidStyle ? styles[appearance] : styles.primary}`;

    return (
        <button className={buttonClassName} type="button" onClick={() => updateCounter()} {...props}>
            {children}
        </button>
    );
}

export default Button;
