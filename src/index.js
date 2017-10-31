import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import '../src/styles/main.css';

import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';



import { HashRouter } from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <Provider store = {store}>
            <App />
        </Provider>
    </HashRouter>,

    document.getElementById('root'));

registerServiceWorker();
