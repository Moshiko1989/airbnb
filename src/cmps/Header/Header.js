import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logo.png';
import './Header.css';
// import { inject, observer } from 'mobx-react'

// @inject('UserStore')
// @observer
export const Header = (props) => {
    const currUser = props.props.UserStore.currUser
    return (
        <header className="header">

            <NavLink to="/" className="logo-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h2>Reactbnb</h2>
            </NavLink>
                <span> welcome {currUser.name}</span>
            {!!currUser ?
                (<nav><NavLink to="/login"><pre>Log Out</pre></NavLink>
                    <NavLink to="/profile"><pre>profile</pre></NavLink> </nav>
                ) : (<nav>
                    <NavLink to="/login"><pre>Register</pre></NavLink>
                    <NavLink to="/login"><pre>Log In</pre></NavLink>
                </nav>
                )}
        </header>
    )
}