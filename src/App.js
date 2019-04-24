import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    green100, green500, green700,
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { browserHistory } from 'react-router'

import kimochiTheme from './kimochiTheme';
import Login from './components/Login'
import Home from './components/Home'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        pickerHeaderColor: cyan500,
        shadowColor: fullBlack,
    },
    appBar: {
        height: 100,
    },
    avatar: {
        borderColor: null,
    }
});

const darkTheme = getMuiTheme(darkBaseTheme);

class App extends Component {
    state = {
        selectedTheme: muiTheme
    }
    handleChangetheme = () => {

    }
    render() {
        return (
            < MuiThemeProvider muiTheme={this.state.selectedTheme} >
                <Router>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                    </div>
                </Router>
            </MuiThemeProvider >
        )
    }
}


  
export default App;
