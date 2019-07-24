import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
//redux 和react-redux（关联react和redux）
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//创建状态树和设置
import {rootRedux, midderware} from './store/rootRedux.js'
//生成状态树对象
const store = createStore(rootRedux, midderware);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
