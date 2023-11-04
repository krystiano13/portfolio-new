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
            <div className="NavWrap">
                <div onClick={openMenu} className={open ? "HamburgerButton opened" : "HamburgerButton"}>
                    <div id="s1" className={open ? "stripe upStripe" : "stripe"}></div>
                    <div id="s2" className={open ? "stripe hidden" : "stripe"}></div>
                    <div id="s3" className={open ? "stripe downStripe" : "stripe"}></div>
                </div>
            </div>
            <nav></nav>
        </>
    )
}

export { Navigation };