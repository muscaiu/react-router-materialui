import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Login from './components/Login'

import {
  darkBaseTheme,
  muiTheme,
  kimochiTheme
} from './themes';

class App extends React.Component {
  state = {
    selectedTheme: muiTheme
  }
  handleChangetheme = (option) => {
    switch (option) {
      case 'kimochiTheme':
        this.setState({ selectedTheme: kimochiTheme })
        break;
      case 'darkBaseTheme':
        this.setState({ selectedTheme: darkBaseTheme })
        break;
      default:
        this.setState({ selectedTheme: muiTheme })
    }
  }
  render() {
    return (
      < MuiThemeProvider muiTheme={getMuiTheme(this.state.selectedTheme)} >
        <Login onChangeTheme={this.handleChangetheme} />
      </MuiThemeProvider >
    )
  }
}

export default App;
