import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logo.png';
import './Header.css';
// import { inject, observer } from 'mobx-react'

// @inject('UserStore')
// @observer
export const Header = (props) => {
    const userStore = props.props.UserStore;
    const currUser = userStore.currUser

    function clearUser() {
        userStore.clearUser()
    }

    return (
        <header className="header">
            <NavLink to="/" className="logo-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h2><pre>React-bnb</pre></h2>
            </NavLink>
            <h2 className="welcome"> Welcome {currUser ? currUser.name : ' Guest'}</h2>
            <nav>
                {!!currUser ?
                    (
                        <ul>
                            <li>
                                <NavLink onClick={clearUser} to="/login"><pre>Log Out</pre></NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile"><pre>Profile</pre></NavLink>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <NavLink to="/login"><pre>Register</pre></NavLink>
                            </li>
                            <li>
                                <NavLink to="/login"><pre>Log In</pre></NavLink>
                            </li>
                        </ul>
                    )}
            </nav>
        </header>
    )
}

