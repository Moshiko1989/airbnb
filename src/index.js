import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import FlatStore from './store/FlatStore'
import UserStore from './store/UserStore'

const store = {FlatStore }
ReactDOM.render(
    <Provider haim={'haim'} {...store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
