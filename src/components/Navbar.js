import { useState } from 'react';
import JohnScott from '../assets/JohnScott.jpg';
import styles from './Navbar.module.scss';

const scrollTo = (id, setOpen) => {
    setOpen(false);

    setTimeout(() => {
        const anchor = document.querySelector(id);
        anchor.scrollIntoView({ behavior: 'smooth' });
    }, 300);
};

const Navbar = () => {
    let [open, setOpen] = useState(false);

    
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <h1>John Scott</h1>
                </div>
                <div className={`${styles.black} ${open ? styles.animate : ''}`}></div>
                <div className={styles.navmenu}>
                    <div
                        style={{backgroundImage: `url(${JohnScott})`}}
                        className={`${styles.navimg} ${open ? styles.animate : ''}`}
                    />
                    <div
                        className={`${styles.links} ${open ? styles.animate : ''}`}
                    >
                        <div>
                            <h2>John Scott</h2>
                            <div>
                                <p>Home</p>
                                <p onClick={() => {scrollTo('#biography', setOpen)}}>Biography</p>
                                <p onClick={() => {scrollTo('#timeline', setOpen)}}>Timeline</p>
                                <p onClick={() => {scrollTo('#documents', setOpen)}}>Documents</p>
                                <p onClick={() => {scrollTo('#tree', setOpen)}}>Family Tree</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.hamburgerHB}
                    onClick={()=>{setOpen(!open);}}
                >
                    <div
                        className={`${styles.hamburger} ${open ? styles.animate : ''}`}
                    >
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
                
            </div>
            
        </>
    );
};

export default Navbar;