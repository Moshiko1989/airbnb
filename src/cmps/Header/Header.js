import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logo.png';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">

            <NavLink to="#" className="logo-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h2>vuebnb</h2>
            </NavLink>

            <nav>
                <NavLink to="#"><pre>Log In</pre></NavLink>
                <NavLink to="#"><pre>Register</pre></NavLink>
            </nav>

        </header>
    )
}