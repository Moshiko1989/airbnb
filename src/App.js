//extentions
import React, { Component } from 'react';
// import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//visual
// import logo from './logo.png';
import './App.css';
//pages
import { HomePage } from '../src/pages/HomePage/HomePage'
import {SignUpPage} from './pages/SignUpPage/SignUpPage'
import { FlatPage } from '../src/pages/Flatpage/FlatPage'
//components
import { Header } from './cmps/Header/Header'

import {inject} from 'mobx-react'

@inject('FlatStore')
class App extends Component {
  componentDidMount (){
    this.props.FlatStore.loadFlats()
  }
  render() {
    var tests = this.props.FlatStore.flatsGetter.map(flat => <p>{flat.id}</p>)
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            {tests}
            <Switch>
              <Route path="/signup" render={(props) => <SignUpPage />}></Route>
              <Route path="/login" render={(props) => <SignUpPage />}></Route>
              <Route exact path="/flat/:id" render={(props) => <FlatPage{...props} />}></Route>
              <Route exact path="/" render={(props) => <HomePage />}></Route>
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
