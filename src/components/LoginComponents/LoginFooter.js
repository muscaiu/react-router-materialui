import React, { Component } from 'react';
import { Link } from 'react-router'

import './LoginFooter.css';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            password: '',
            username: '',
        }
    }

    render() {
        return (
            <div className="extra form-group">

                <Link to="/register">Register</Link>

                <div className="extra small">App Version: 1.0</div>

            </div>
        )
    }
}

export default LoginForm


