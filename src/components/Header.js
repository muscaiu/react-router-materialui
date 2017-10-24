import React, { Component } from 'react';
import { Link } from 'react-router'

import './Header.css';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <Link to="/">
                    {<img src={logo} className="Header-logo" alt="logo" />}
                </Link>
            </header>
        )
    }
}

export default Header
