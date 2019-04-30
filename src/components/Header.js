import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <AppBar
                style={{ color: this.props.muiTheme.palette.textColor }}
                title="My AppBar"
                children={
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login/">Login</Link>
                        </li>
                    </ul>
                }
            />
        )
    }
}

export default muiThemeable()(Header);
