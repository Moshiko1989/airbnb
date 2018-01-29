import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import logo from '../../logo.png';
import './Header.css';

@inject('UserStore')
@observer

export class Header extends Component {

    clearUser = () => {
        this.props.UserStore.clearUser()
    }
    render() {

        var currUser = this.props.UserStore.currUserGetter
        return (
            <header className="header">
                <NavLink to="/" className="logo-container">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <h2><pre>React-bnb</pre></h2>
                </NavLink>
                <h2 className="welcome"> Welcome {currUser ? currUser.username : ' Guest'}</h2>
                <nav>
                    {!!currUser ?
                        (
                            <ul>
                                <li>
                                    <NavLink onClick={this.clearUser} to="/"><pre>Log Out</pre></NavLink>
                                </li>
                                    {currUser.bookedFlats !== [] || currUser.likedFlatsIds !== [] ?
                                <li>
                                    <NavLink to="/profile"><pre><i className="fa fa-shopping-cart" aria-hidden="true"></i></pre></NavLink>
                                </li>
                                : 
                                ''
                                    }
                                <li>
                                    <NavLink to="/profile"><pre>Profile</pre></NavLink>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li>
                                    <NavLink to="/signup"><pre>Register</pre></NavLink>
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
}

