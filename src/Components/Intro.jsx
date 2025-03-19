import React from 'react';
import styles from './Intro.module.css';
import profPic from '../assets/profpic.png';


function Intro() {
  return (
    <section id='intro' className={styles.intro}>
      
      <div className={styles.mainInfo}>
        <h1>Hey, I'm <span>Effy</span></h1>
        <h4>Web Developer</h4>
        <p className={styles.introInfo}>I am the world's best at seamlessly blending social media expertise with cutting-edge web app development,</p>
        {/*<button type='' className={styles.download}>Download CV</button>*/}
        <div className={styles.socials}>
        <i className="bi bi-linkedin"><a href='#' target='_blank'></a></i>
        <i className="bi bi-github"><a href='#' target='_blank'></a></i>
        <i className="bi bi-youtube"><a href='#' target='_blank'></a></i>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <img src={profPic} className={styles.profPic}/>
      </div>
    </section>
  )
}

export default Intro;
