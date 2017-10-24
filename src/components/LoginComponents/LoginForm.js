import React, { Component } from 'react';
import { hashHistory } from 'react-router'
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

    // this.props.startSpinner()
    this.setState({ errors: {} })

    return this.props.login(this.state.username, this.state.password)
      .then((response) => {
        if (response.loggedIn === true) {
          hashHistory.push('/home')
        }
        else {
          // this.props.stopSpinner()
          // this.props.openSnack(4000, 'Failed to login.')
        }
      })
      .catch(err => {
        // console.error(err)
      })
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
            <RaisedButton className="bigLogin" label="Login" type="submit" primary />
            {/* <DynamicSpinner spinnerRunning={this.props.spinnerRunning} /> */}
          </div>
          {/* <DynamicSnack
                        snackOpen={this.props.snackOpen}
                        snackTimer={this.props.snackTimer}
                        snackMessage={this.props.snackMessage}
                        closeSnack={this.props.closeSnack}
                        stopSpinner={this.props.stopSpinner}
                    /> */}
        </form>
      </div>
    )
  }
}

export default LoginForm
