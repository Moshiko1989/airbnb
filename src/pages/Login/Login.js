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
            name: '',
            password: '',
        }
    }
    submit = (e) => {
        e.preventDefault()
        this.props.UserStore.loadUser(this.state.userToLog)
        this.props.history.push('/')        
        
    }
    onInputChange(field) {
        return (e) => {
            const newUser = {
                ...this.state.userToLog,
                [field]: e.target.value
            }
            this.setState({ userToLog: newUser })
            // console.log({newUser})

        }
    }
    render() {
        // return <div onChange={this.onInputChange} className="login"><input type="text" placeholder="Name"/></div>
        return (
            <form onSubmit={this.submit} className="login">
                <input onChange={this.onInputChange('name')} type="text" placeholder="Name" />
                <input onChange={this.onInputChange('password')} type="password" placeholder="Password" />
                <button className="button is-link">Log In</button>
            </form>
        )
    }
}