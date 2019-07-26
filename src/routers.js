import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import NavReactRedux from './component/nav/NavReactRedux.js';
import LoginReactRedux from './page/login/LoginReactRedux.js';
import HomeReactRedux from './page/home/HomeReactRedux';
import TablePage from './page/table/tablePage';
import NewsReactRedux from './page/news/NewsReactRedux.js';
import AnimationPage from './page/animation/animationPage';
import EditorDemo from './page/editor/editor'
import NotFind from './page/notFind/NotFind'
export function Routers() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomeReactRedux} />
                    <Route exact path="/table" component={TablePage} />
                    <Route exact path="/news" component={NewsReactRedux} />
                    <Route exact path="/login" component={LoginReactRedux} />
                    <Route exact path="/animation" component={AnimationPage}/>
                    <Route exact path="/editor" component={EditorDemo}/>
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