import styles from './Projects.module.css';
import contact from '../assets/contact_form.jpg';
import product from '../assets/ecommerceproductpg.jpg';
import url from '../assets/url-shortening.jpg';
import github from '../assets/github.svg';
import globe from '../assets/globe-solid.svg';


function Projects() {
    return (
        <section id="projects" className={styles.projects}>
        <h2>Top <span>Projects</span></h2>
        <div className={styles.container}>
            <p className={styles.projectInfo}>Explore these sample projects to see firsthand how I can bring your website vision to life with creativity and precision!</p>
            <div className={styles.projectContainer}>
                <div className={styles.projectDets}>
                    <img src={contact} />
                    <div className={styles.overlay}>
                        <a href="" target='_blank'><img src={github} alt="" className={styles.githubIcon}/></a>
                        <a href="" target='_blank'><img src={globe} alt="" className={styles.githubIcon}/></a>
                    </div>
                    <h6>Contact Form</h6>
                </div>

                <div className={styles.projectDets}>
                    <img src={product} />
                    <div className={styles.overlay}>
                        <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                    <h6>E-Commerce Product Page</h6>
                </div>

                <div className={styles.projectDets}>
                    <img src={url} />
                    <div className={styles.overlay}>
                        <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                    <h6>Url Shortening Landing Page</h6>
                </div>
            </div>
            {/*<h3>Front-End Projects</h3>
            <div className={styles.projectContainer}>
                <div className={styles.projectDets}>
                    <img src={contact} />
                    <div className={styles.overlay}>
                        <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                    <h6>Contact Form</h6>
                </div>

                <div className={styles.projectDets}>
                    <img src={product} />
                    <div className={styles.overlay}>
                        <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                    <h6>E-Commerce Product Page</h6>
                </div>

                <div className={styles.projectDets}>
                    <img src="" />
                    <div className={styles.overlay}>
                        <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                    <h6>1</h6>
                </div>
            </div>
        </div>


        <div className={styles.container}>
            <h3>Full-Stack Projects</h3>
            <div className={styles.projectContainer}>
                <div className={styles.projectDets}>
                    <img src="" />
                    <div className={styles.overlay}>
                        <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                    <h6>1</h6>
                </div>

                <div className={styles.projectDets}>
                    <img src="" />
                    <div className={styles.overlay}>
                        <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                    <h6>1</h6>
                </div>

                <div className={styles.projectDets}>
                    <img src="" />
                    <div className={styles.overlay}>
                        <a href="#" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                    <h6>1</h6>
                </div>
            </div>*/}
        </div>
        </section>
    )
}

export default Projects;