import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import validator from 'validator'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      password: '',
      username: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!validator.isLength(this.state.username, { min: 2, max: 100 })) {
      this.setState({ errors: { username: 'Must be 2-100 characters long' } })
      return false
    }

    if (!validator.isLength(this.state.password, { min: 6, max: undefined })) {
      this.setState({ errors: { password: 'Must be at least 6 characters long' } })
      return false
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-login">
          <div className="form-group">
            <TextField
              name="username" hintText="Email" errorText={this.state.errors.username || ''}
              onChange={this.handleChange} id="usernameTextField"
            />
          </div>
          <div className="form-group">
            <TextField
              name="password" hintText="Password" errorText={this.state.errors.password || ''}
              type="password" onChange={this.handleChange} id="passwordTextField"
            />
          </div>

          <div className="submit">
            <RaisedButton
              label="disabled"
              disabled
            />
            <RaisedButton
              className="bigLogin"
              label="Login"
              type="submit"
              primary
            />
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
