import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import { Provider } from 'react-redux';
import appCreateStore from './lib/app-create-store'
// import './syle/main.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

let store = appCreateStore();


class AppContainer extends React.Component {

    render() {
        return (
            // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <MuiThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </MuiThemeProvider>

        )
    }
}

ReactDom.render(<AppContainer />, document.getElementById('root'));