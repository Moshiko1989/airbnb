import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logo.png';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">

            <NavLink to="/" className="logo-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h2>vuebnb</h2>
            </NavLink>

            <nav>
                <NavLink to="/signup"><pre>Register</pre></NavLink>
                <NavLink to="/login"><pre>Log In</pre></NavLink>
            </nav>

        </header>
    )
}