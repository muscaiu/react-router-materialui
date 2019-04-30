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
        <button onClick={() => this.props.onChangeTheme('default')}>default</button>
        <button onClick={() => this.props.onChangeTheme('kimochiTheme')}>kimochiTheme</button>
        <button onClick={() => this.props.onChangeTheme('darkBaseTheme')}>darkTheme</button>
      </div>
    )
  }
}

export default Login
