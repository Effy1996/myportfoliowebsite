import { useState } from 'react';
import styles from './NavBar.module.css';
import logo from '../assets/effylogo.png';
import menuIcon from '../assets/icon-menu.svg';
import menuExit from '../assets/icon-close.svg';

function NavBar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <>
        <nav>
            <a href='#intro'><img src={logo} className={styles.logo}/></a>
            <div className={styles.menubar}>
                <img src={menuIcon} className={styles.menuIcon} onClick={() => setOpenNavbar(true)}/>
                {openNavbar && (<div className={styles.respNav}>
                <img src={menuExit} className={styles.menuExit} onClick={() => setOpenNavbar(false)}/>
                <ul>
                    <li><a href='#intro' tabIndex={0} onClick={() => setOpenNavbar(false)}>Home</a></li>
                    <li><a href='#about' tabIndex={0} onClick={() => setOpenNavbar(false)}>About</a></li>
                    <li><a href='#services' tabIndex={0} onClick={() => setOpenNavbar(false)}>Services</a></li>
                    <li><a href='#skills' tabIndex={0} onClick={() => setOpenNavbar(false)}>Skills</a></li>
                    <li><a href='#projects' tabIndex={0} onClick={() => setOpenNavbar(false)}>Projects</a></li>
                    <li><a href='#contact' tabIndex={0} onClick={() => setOpenNavbar(false)}>Contact</a></li>
                </ul>
                </div>)}
                <div className={styles.fullNav}>
                <ul>
                    <li><a href='#intro' tabIndex={0}>Home</a></li>
                    <li><a href='#about' tabIndex={0}>About</a></li>
                    <li><a href='#services' tabIndex={0}>Services</a></li>
                    <li><a href='#skills' tabIndex={0}>Skills</a></li>
                    <li><a href='#projects' tabIndex={0}>Projects</a></li>
                    <li><a href='#contact' tabIndex={0}>Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;