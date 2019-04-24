import React, { Component } from 'react';

import './Login.css'
import LoginForm from './LoginComponents/LoginForm'
import LoginFooter from './LoginComponents/LoginFooter'
import Header from './Header'

class Login extends Component {

  render() {
    return (
      <div className="Login">
        <Header />
        <LoginForm />
        <LoginFooter />
        <button onClick={() => this.props.onChangetheme()}>
          toggle theme
        </button>
      </div>
    )
  }
}

export default Login
