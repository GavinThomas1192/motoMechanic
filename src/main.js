import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import { Provider } from 'react-redux';
import appCreateStore from './lib/app-create-store'
// import './syle/main.scss'

let store = appCreateStore();


class AppContainer extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDom.render(<AppContainer />, document.getElementById('root'));