import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Spacing from 'material-ui/styles/spacing';
import * as Colors from 'material-ui/styles/colors';

const kimochiTheme = getMuiTheme({
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
});

export default kimochiTheme;
