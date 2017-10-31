import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import './index.css';
=======
import '../src/styles/main.css';
>>>>>>> 1f732b3229c9a8e5024b89cfd7be557bb1b7809f
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
