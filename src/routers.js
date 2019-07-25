import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import NavReactRedux from './component/nav/NavReactRedux.js';
import LoginReactRedux from './page/login/LoginReactRedux.js';
import HomeReactRedux from './page/home/HomeReactRedux';
import About from './page/about/About.js';
import NewsReactRedux from './page/news/NewsReactRedux.js';
import NotFind from './page/notFind/NotFind'
export function Routers() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomeReactRedux} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/News" component={NewsReactRedux} />
                    <Route component={NotFind} />
                </Switch>
            </div>
        );
};

export function NotLoginRoutes () {
        return (
                <Switch>
                    <Route path="/login" component={LoginReactRedux} />
                    <Redirect to='/login'/>
                    {/* <Route component={NotFind} /> */}
                </Switch>
        );
    }