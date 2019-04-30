import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { Router, Route, Switch } from 'react-router';

import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Login />
      // <Router>
      //   <Switch>
      //     <Route path="/" exact component={Home} />
      //     <Route path="/login" component={Login} />
      //   </Switch>
      // </Router>
    )
  }
}



export default App;
