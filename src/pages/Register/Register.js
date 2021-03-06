// Extentions
import React, { Component } from 'react';
import { inject } from 'mobx-react';
// Will be used synchronously
import UserService from '../../services/UserService';
// Style
import 'bulma/css/bulma.css';
import './Register.css';

@inject('UserStore')
export class Register extends Component {
    state = {
        user: null,
    }
    componentDidMount() {
        this.props.UserStore.clearUser()
        this.setState({ user: UserService.getEmptyUser() })
    }
    submit = (e) => {
        e.preventDefault()
        var user = this.state.user
        this.props.UserStore.setUser(user)
        this.props.history.push('/')
    }
    onInputChange = (field) => {
        return (e) => {
            const newUser = {
                ...this.state.user,
                [field]: e.target.value
            }
            this.setState({ user: newUser })
            // console.log(this.state.user)
        }
    }
    render() {
        if (!this.state.user) return <div>no user</div>
        return (
            <section>
                <h1 className="title">Sign Up To React-Bnb</h1>
                <h4 className="subtitle">It's Only take 7 seconds</h4>
            <form onSubmit={this.submit} className="register">
                <input onChange={this.onInputChange('username')} type="text" placeholder="Name"  />
                <input onChange={this.onInputChange('pass')} type="password" placeholder="Password" />
                <input type="password" placeholder="password verification" />
                <input onChange={this.onInputChange('email')} type="email" placeholder="Email"/>
                <button className="button is-link">Register</button>
            </form>
            </section>
        )
    }
}
