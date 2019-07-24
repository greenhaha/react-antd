import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//全局reducer
import isLogin from './indexRedux.js'
//子reducer
//子reducer
import NewsRedux from '../page/news/NewsRedux.js'
// const logger = createLogger()
//合并reducer
export const rootRedux = combineReducers({
    isLogin,
    NewsRedux
})
export const midderware = applyMiddleware(thunk, logger)