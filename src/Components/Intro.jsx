import React from 'react';
import styles from './Intro.module.css';
import profPic from '../assets/profpic.png';


function Intro() {
  return (
    <section id='intro' className={styles.intro}>
      
      <div className={styles.mainInfo}>
        <h1>Hey, I'm <span>Effy</span></h1>
        <h4>Web Developer</h4>
        <p className={styles.introInfo}> I specialize in blending social media expertise with modern web app development to create impactful digital experiences.</p>
        {/*<button type='' className={styles.download}>Download CV</button>*/}
        <div className={styles.socials}>
        <a href="https://linkedin.com/in/effy-akinyi-odhiambo-18569031b" target='_blank'><i className="bi bi-linkedin"></i></a>
        <a href='https://github.com/Effy1996' target='_blank'><i className="bi bi-github"></i></a>
        <a href='https://www.youtube.com/@TechGirl_Ke-o4y' target='_blank'><i className="bi bi-youtube"></i></a>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <img src={profPic} className={styles.profPic}/>
      </div>
    </section>
  )
}

export default Intro;
