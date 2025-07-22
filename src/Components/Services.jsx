import React from 'react';
import styles from './Services.module.css';
import webpic from "../assets/webpic.jpg";
import socialpic from "../assets/socialpic.jpg";
import digitalpic from "../assets/digitalpic.jpg";


function Services() {
  return (
    <section id='services' className={styles.services}>
      <h2><span>Services I</span> Offer</h2>
      <div className={styles.serviceContainer}>
        <div className={styles.service}>
            <img src={webpic} alt="" />
            <h4>Website Development and Design</h4>
            <p className={styles.serviceInfo}>Creating stunning, user-friendly websites tailored to your needs-offering web development, responsive design, SEO optimization, and seamless functionality to elevate your online presence.</p>
          {/*<span className="price">From Ksh 3,000</span>*/}
        </div>
        <div className={styles.service}>
            <img src={socialpic} alt="" />
            <h4>Social Media Management</h4>
            <p className={styles.serviceInfo}>Helping businesses grow online with strategic social media management-createing engaging content, optimizing profiles, and boosting visibility to attract and connect with the right audience.</p>
            {/*<span className="price">From Ksh 1,000</span>*/}
        </div>
        <div className={styles.service}>
            <img src={digitalpic} alt="" />
            <h4>Digital Marketing</h4>
            <p className={styles.serviceInfo}>Crafting data-driven digital marketing strategies-leveraging SEO, content marketing, and social media to increase brand awareness, drive traffic, and convert visitors to loyal customers.</p>
            {/*<span className="price">From Ksh 2,000</span>*/}
        </div>
      </div>
    </section>
  )
}

export default Services;
