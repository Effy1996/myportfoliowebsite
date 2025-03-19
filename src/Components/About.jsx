import styles from './About.module.css';
import profpic from '../assets/profpic.png';

function About() {
    return (
        <section id='about' className={styles.about}>
        <h2>About <span>Me</span></h2>
        <div className={styles.aboutImg}>
            <img src={profpic} className={styles.profpic}/>
            <span className={styles.spin}></span>
        </div>
        
        <p className={styles.aboutInfo}>Since 2019, I've been on a digital adventure—exploring everything from Digital Marketing and Web Development to Social Media Management. Now, I’m putting all that knowledge into action with hands-on projects! Whether you need a sleek website or a social media presence that shines (with a sprinkle of SEO magic), I’ve got you covered. Let’s build something awesome together!</p>
        </section>
    )
}

export default About;