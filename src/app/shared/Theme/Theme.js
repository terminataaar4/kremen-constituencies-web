// React
import React from 'react';
// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Colors
import {fade} from 'material-ui/utils/colorManipulator';

// Custom theme
let customTheme = {
  palette: {
    primary1Color: '#468df0',
    primary2Color: '#468df0',
    primary3Color: '#468df0',
    accent1Color: '#0060bd',
    accent2Color: '#0060bd',
    accent3Color: '#0060bd',
    textColor: '#000000',
    secondaryTextColor: '#ffffff',
    alternateTextColor: '#ffffff',
    canvasColor: '#FFFFFF',
    borderColor: fade('#000000', 0.3),
    disabledColor: fade('#000000', 0.3),
    pickerHeaderColor: fade('#000000', 0.12),
    clockCircleColor: fade('#000000', 0.12),
  },
};

export default (props) => (
    <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        {props.children}
    </MuiThemeProvider>
)