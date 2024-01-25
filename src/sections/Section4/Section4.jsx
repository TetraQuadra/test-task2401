import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Button from 'components/Button/Button'
import styles from './Section4.module.scss'
import { ReactComponent as ImageMobile } from 'images/imageMobile.svg';
import { ReactComponent as ImageDesktop } from 'images/imageDesktop.svg';

function Section4() {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            console.log('Feature Shown');
        }
    }, [inView]);

    return (
        <section className={styles.section} >
            <div className='container'>
                <div className={styles.contentWrapper}>
                    <h2 className={styles.title} ref={ref}>Nulla ligula at tortor eleifend</h2>
                    <p className={styles.description}>Phasellus finibus arcu sit amet nibh faucibus, id lacinia lacus tincidunt. Proin iaculis risus ut porta accumsan. In volutpat nisl varius, lobortis mauris vitae, interdum arcu. Donec in neque libero. Proin turpis leo, porta eu justo et, lobortis porttitor dui. Quisque interdum, risus vel pretium sollicitudin, enim ipsum tempus neque, a dapibus nibh metus a metus.</p>
                    <ImageMobile className={styles.imageMobile} />

                    <ul className={styles.buttonList}>
                        <Button className={styles.button}>Download</Button>
                        <Button className={styles.button} appearance='secondary'>Buy Now</Button>
                    </ul>
                </div>
                <ImageDesktop className={styles.imageDesktop} />
            </div>
        </section>
    )
}

export default Section4