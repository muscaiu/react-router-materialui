import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Spacing from 'material-ui/styles/spacing';
import * as Colors from 'material-ui/styles/colors';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const muiTheme = {
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
    // height: 100,
  },
  avatar: {
    borderColor: null,
  }
}

const kimochiTheme = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#dd437c',
    primary2Color: Colors.cyan700,
    primary3Color: '#061e36',
    accent1Color: '#dd437c',
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: '#061e36',
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: '#ccd7dc',
    disabledColor: '#5e5e70',
  },
  dialog: {
    titleFontSize: 20,
    bodyFontSize: 14,
    bodyColor: Colors.darkBlack,
  },
  raisedButton: {
    // disabledColor: '#dd437c',
    disabledTextColor: Colors.white,
  },
};

export {
  darkBaseTheme,
  muiTheme,
  kimochiTheme
}