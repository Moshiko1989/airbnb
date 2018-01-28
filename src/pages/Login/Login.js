// Extentions
import React, { Component } from 'react';
import { inject } from 'mobx-react';
// Styles
import 'bulma/css/bulma.css';
import './Login.css'

@inject('UserStore')
export class Login extends Component {
    state = {
        userToLog: {
            username: '',
            pass: '',
        }
    }
    submit = (e) => {
        e.preventDefault()
        this.props.UserStore.loadUser(this.state.userToLog) 
        .then(res => {
            this.props.history.push('/') 
        })      
    }
    onInputChange(field) {
        return (e) => {
            const newUser = {
                ...this.state.userToLog,
                [field]: e.target.value
            }
            this.setState({ userToLog: newUser })
        }
    }
    render() {
        return (
            <form onSubmit={this.submit} className="login">
                <input onChange={this.onInputChange('username')} type="text" placeholder="Name" />
                <input onChange={this.onInputChange('pass')} type="password" placeholder="Password" />
                <button className="button is-link">Log In</button>
            </form>
        )
    }
}