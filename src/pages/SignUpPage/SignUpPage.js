import React, { Component } from 'react'
import UserService from '../../services/UserService'
// import { observable, action, computed , autorun } from 'mobx'
import './SignUpPage.css'
import {inject , observer} from 'mobx-react'

@inject('UserStore')
@observer
export class SignUpPage extends Component {

    state = {
        toLogIn: false,
        newUser: UserService.getEmptyUser()
    }

    signUpUser = (ev) => {
        ev.preventDefault()
        this.props.UserStore.setUser(this.state.newUser)
        this.props.history.push('/')
    }

    onInputChange(field) {
        return (event) => {
          const newUser = {...this.state.newUser, 
                          [field]: event.target.value}    
          this.setState({newUser})
        }
      }
    

    render() {
// LOGIN PAGE
        if (!!this.state.toLogIn) {
            return (
                <section className="signup-page">
                 <header className="signup-header">
                    <h1>Login to React-Bnb </h1>
                </header>
                <main className="signup-main">
                    <input type="text" placeholder="your username" />
                    <input type="password" placeholder="your username" />
                </main>
                <footer className="signup-footer">
                    <h3> Welcome Back</h3>
                </footer>
                </section>
            )
//SIGN UP PAGE
        } else {
            return (
            <section className="signup-page">
                <header className="signup-header">
                    <h1>Sign Up To React-Bnb</h1>
                    <h4>It's Only take 7 seconds</h4>
                </header>
                <main>
                <form className="signup-main" onSubmit={this.signUpUser}>
                   <label> name: <input type="text" placeholder="insert your name"
                                    value={this.state.newUser.name}
                                    onInput={this.onInputChange('name')} />
                    </label>
                   <label> password: <input type="password" placeholder="fill your password" 
                                        value={this.state.newUser.password}
                                        onInput={this.onInputChange('passowrd')}
                   /></label>
                   <button>Sign Up</button>
                </form>
                </main>
                <footer className="signup-footer">
                    <h3>Find homes on React-Bnb</h3>
                    <p>Discover entire homes and private rooms perfect for any trip.</p>
                </footer>
            </section>
            )
        }
    }
}

export default SignUpPage