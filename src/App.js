//extentions
import React, { Component } from 'react';
// import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//visual
// import logo from './logo.png';
import './App.css';
//pages
import { HomePage } from '../src/pages/HomePage/HomePage'
//components
import { Header } from './cmps/Header/Header'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Switch>
              
              <Route exact path="/" render={(props) => <HomePage />}></Route>
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
