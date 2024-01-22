import React, { useState } from 'react';
import styles from './Tabs.module.scss';

const Tabs = ({ tabsData, className }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className={`${styles.tabsContainer} ${className}`}>
            <div className={styles.tabButtons}>
                {tabsData.map((tab, index) => (
                    <button
                        key={tab.tabName}
                        className={`${styles.tabButton} ${index === activeTab ? styles.activeTab : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.tabName}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                <h2 className={styles.contentHeader}>{tabsData[activeTab].title}</h2>
                <p className={styles.content}>{tabsData[activeTab].content}</p>
            </div>
        </div>
    );
};

export default Tabs;
