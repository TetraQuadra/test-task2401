import React from 'react';
import styles from './Advantages.module.scss';
import { ReactComponent as CheckmarkIcon } from 'images/icons/checkmark.svg';

function Advantages({ advantagesData }) {
    return (
        <ul className={styles.advantagesList}>
            {advantagesData.map((item, index) => (
                <li key={index} className={styles.advantageItem}>
                    {item.img}
                    <h2 className={styles.advantageTitle}>{item.title}</h2>
                    <ul className={styles.subList}>
                        {item.advantages.map((advantage, i) => (
                            <li key={i} className={styles.subListItem}>
                                <CheckmarkIcon className={styles.checkmarkIcon} />
                                {advantage}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default Advantages;
