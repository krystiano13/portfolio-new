import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [open, setOpen] = useState<boolean>(false);

    const openMenu = () => {
        setOpen(prevState => {
            return !prevState;
        })
    }

    return (
        <>
            <nav className={!open ? "navHidden" : "op"}>
                <ul>
                    <a href="/portfolio-new"><li>Home Page</li></a>
                    <a href="/portfolio-new/about"><li>About</li></a>
                    <a href="/portfolio-new/skills"><li>Skills</li></a>
                    <a href="/portfolio-new/projects"><li>My Projects</li></a>
                    <a href="/portfolio-new/contact"><li>Contact</li></a>
                </ul>
            </nav>
            <div className="NavWrap">
                <div onClick={openMenu} className={open ? "HamburgerButton opened" : "HamburgerButton"}>
                    <div id="s1" className={open ? "stripe upStripe" : "stripe"}></div>
                    <div id="s2" className={open ? "stripe hidden" : "stripe"}></div>
                    <div id="s3" className={open ? "stripe downStripe" : "stripe"}></div>
                </div>
            </div>
        </>
    )
}

export { Navigation };