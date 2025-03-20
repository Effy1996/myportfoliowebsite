import styles from './Skills.module.css';
import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react from '../assets/react.svg';
import django from '../assets/django.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/javascript.svg';
import python from '../assets/python.svg';


const slides = [
    {
        percentage: 80,
        img: react,
        caption: "React",
    },
    {
        percentage: 85,
        img: django,
        caption: "Django",  
    },
    {
        percentage: 90,
        img: html,
        caption: "HTML",
    },
    {
        percentage: 90,
        img: css,
        caption: "CSS",
    },
    {
        percentage: 80,
        img: js,
        caption: "JavaScript",
    },
    {
        percentage: 75,
        img: python,
        caption: "Python",
    },
    {
        percentage: 75,
        caption: "Web Development",
    },
    {
        percentage: 80,
        caption: "Digital Marketing",
    },
    {
        percentage: 85,
        caption: "Social Media Management",
    }
]


function Skills() {

    const slideContainerRef = useRef(null);

    useEffect(() => {
        const container = slideContainerRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const scrollSpeed = 2; // Adjust speed (higher = faster)
        const scrollStep = () => {
            if (!container) return;

            if (scrollAmount < container.scrollWidth - container.clientWidth) {
                scrollAmount += scrollSpeed;
                container.scrollLeft = scrollAmount;
            } else {
                scrollAmount = 0; // Reset when reaching the end
            }

            requestAnimationFrame(scrollStep);
        };

        requestAnimationFrame(scrollStep);
    }, []);
    
    return (
        <section id='skills' className={styles.skills}>
            <h2>My<span> Skills</span></h2>
            
           {/* <Carousel responsive={responsive} infinite={true} swipeable={true} draggable={false} containerClass={styles.slideContainer}>
                <div className={styles.slide}>
                    <div className={styles.percentage}>60%</div>
                    <div className={styles.caption}><img src={react} alt=''/>React</div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.percentage}>79%</div>
                    <div className={styles.caption}><img src={django} alt=''/>Django</div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.percentage}>90%</div>
                    <div className={styles.caption}><img src={html} alt=''/>HTML</div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.percentage}>85%</div>
                    <div className={styles.caption}><img src={css} alt=''/>CSS</div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.percentage}>80%</div>
                    <div className={styles.caption}><img src={js} alt=''/>JavaScript</div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.percentage}>75%</div>
                    <div className={styles.caption}><img src={python} alt=''/>Python</div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.percentage}>70%</div>
                    <div className={styles.caption}>Web Development</div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.percentage}>80%</div>
                    <div className={styles.caption}>Digital Marketing</div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.percentage}>85%</div>
                    <div className={styles.caption}>Social Media Management</div>
                </div>
            </Carousel>*/}
            {/*<button onClick={prevSlide}><i className="bi bi-caret-left-fill"></i></button> className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}*/}
                <div className={styles.slideContainer} ref={slideContainerRef}>
                    {slides.map((slide, index) => (
                        <div key={index} >
                            <div className={styles.percentage}>{slide.percentage}%</div>
                            <div className={styles.caption}><img src={slide.img} alt=''/>{slide.caption}</div>
                        </div>
                    ))}
                </div> 
            {/*<button onClick={nextSlide}><i className="bi bi-caret-right-fill"></i></button>*/}

        </section>
         
    )
}

export default Skills;