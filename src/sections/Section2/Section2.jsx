import Advantages from 'components/Advantages/Advantages'
import React from 'react'
import styles from './Section2.module.scss'
import { ReactComponent as NotebookImg } from 'images/section2/notebook.svg';
import { ReactComponent as HDDImg } from 'images/section2/hdd.svg';
import { ReactComponent as AppImg } from 'images/section2/app.svg';

function Section2() {

    const advantagesData = [{
        img: <NotebookImg />,
        title: 'Lorem ipsum dolor sit',
        advantages: ['Fusce imperdiet leo lobortis luctus.', 'Phasellus scelerisque dolor.', 'Mauris euismod metus quis eros.']
    },
    {
        img: <HDDImg />,
        title: 'Aenean sagittis mauris',
        advantages: ['Phasellus scelerisque dolor.', 'Proin id est laoreet, aliquet leo eget.', 'Vestibulum vitae turpis id metus.']
    },
    {
        img: <AppImg />,
        title: 'Turpis id metus vestibulum ',
        advantages: ['Vestibulum quis diam non.', 'Donec consectetur leo at ultrices.', 'In euismod lacus nec magna.']
    }]
    return (



        <section className={styles.section}>
            <div className='container'>
                <h2 className={styles.title}>Nam at pulvinar dui, ornare ullamcorper nulla cursus rhoncus velit?</h2>
                <Advantages advantagesData={advantagesData} />


            </div>
        </section>
    )
}

export default Section2