import Button from 'components/Button/Button'
import React from 'react'
import styles from './Hero.module.scss'

function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.heroWrapper}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet, <span className={styles.span}>consectetur</span> adipiscing elit.</h1>
                <p className={styles.description}>Sed pellentesque, lectus ut convallis vestibulum, metus urna blandit arcu, vitae malesuada tellus augue non diam.</p>
                <Button className={styles.downloadButton}>Download</Button>
            </div>
        </section>
    )
}

export default Hero