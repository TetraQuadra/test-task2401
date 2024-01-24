import React, { useEffect, useState } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as Triangle } from 'images/section3/triangle.svg';
import { ReactComponent as Square } from 'images/section3/square.svg'
import { ReactComponent as Circle } from 'images/section3/circle.svg';
import { ReactComponent as ArrowLeft } from 'images/icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from 'images/icons/arrowRight.svg';
import styles from './Slider.module.scss'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Slider() {
    const [slidesAmount, setSlidesAmount] = useState(1)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSlidesAmount(3);
            }
            else {
                setSlidesAmount(1);
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (

        <div className={styles.slider}>
            <Swiper
                modules={[Navigation]}
                slidesPerView={slidesAmount}
                loop={true}
                navigation={{ nextEl: `.${styles.nextButton}`, prevEl: `.${styles.prevButton}` }}
            >

                <SwiperSlide >
                    <div className={styles.card}>
                        <Triangle className={styles.cardImg} />
                        <div className={styles.cardTextWrapper}>
                            <h2 className={styles.cardTitle}>Sit amet ante </h2>
                            <p className={styles.cardDescription}>Diam id lacinia ullamcorper, ipsum nibh lobortis nibh, a eleifend elit enim non enim.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <Square className={styles.cardImg} />
                        <div className={styles.cardTextWrapper}>
                            <h2 className={styles.cardTitle}>Quisque maximus</h2>
                            <p className={styles.cardDescription}>Phasellus hendrerit sapien vel magna congue fringilla. Phasellus finibus arcu sit amet nibh faucibus.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <Circle className={styles.cardImg} />
                        <div className={styles.cardTextWrapper}>
                            <h2 className={styles.cardTitle}>Nunc in malesuada</h2>
                            <p className={styles.cardDescription}>Ut vitae massa dignissim, tempor dui eget, suscipit neque. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.card}>
                        <Triangle className={styles.cardImg} />
                        <div className={styles.cardTextWrapper}>
                            <h2 className={styles.cardTitle}>Sit amet ante </h2>
                            <p className={styles.cardDescription}>Diam id lacinia ullamcorper, ipsum nibh lobortis nibh, a eleifend elit enim non enim.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={styles.buttonContainer}>
                <button className={styles.prevButton}><ArrowLeft /></button>
                <button className={styles.nextButton}><ArrowRight /></button>
            </div>
        </div>

    )
}

export default Slider