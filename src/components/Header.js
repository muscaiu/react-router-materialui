import React, { Component } from 'react';
// import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <AppBar
                style={{ color: this.props.muiTheme.palette.textColor }}
                title="My AppBar"
                // children={
                //     <nav>
                //         <ul>
                //             <li>
                //                 <Link to="/">Home</Link>
                //             </li>
                //             <li>
                //                 <Link to="/login/">Login</Link>
                //             </li>
                //         </ul>
                //     </nav>
                // }
            />
        )
    }
}

export default muiThemeable()(Header);
