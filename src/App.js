import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Layout, Menu, Icon } from 'antd';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import NavReactRedux from './NavReactRedux.js';
import LoginReactRedux from './page/login/LoginReactRedux.js';
import HomeReactRedux from './page/home/HomeReactRedux';
import About from './page/about/About.js';
import NewsReactRedux from './page/news/NewsReactRedux.js';
import NotFind from './page/notFind/NotFind'
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavReactRedux />
        <div>
          <Switch>
            <Route exact path="/" component={LoginReactRedux} />
            <Route exact path="/Home" component={HomeReactRedux} />
            <Route path="/About" component={About} />
            <Route path="/News" component={NewsReactRedux} />
            <Route component={NotFind} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
