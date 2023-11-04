import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <div className="HamburgerButton">
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
            </div>
            <nav></nav>
        </>
    )
}

export { Navigation };