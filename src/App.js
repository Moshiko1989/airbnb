//extentions
import React, { Component } from 'react';
// import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//visual
// import logo from './logo.png';
import './App.css';
//pages
import { HomePage } from '../src/pages/HomePage/HomePage'
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
<<<<<<< HEAD
              
              <Route exact path="/" render={(props) => <HomePage />}></Route>
              <Route exact path="/flat" render={(props) => <FlatPage />}></Route>
              
=======
              <Route exact path="/" render={(props) => <HomePage />}></Route>
>>>>>>> 788195039df80bb6ae1d20f3fec057fef6c2455c
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
