import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { Provider } from "react-redux"
import createHistory from "history/createBrowserHistory"
import { browserHistory } from "react-router-dom"
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers"
import sagas from "./sagas"

import registerServiceWorker from './registerServiceWorker'
import './index.css'

import App from "./app"

const history = createHistory()

//MIDDLEWARE SETUP
const reduxRouterMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const middlewares = [reduxRouterMiddleware, sagaMiddleware]


//CREATE STORE
let store = createStore(
    combineReducers({...reducers, router: routerReducer}),
    composeWithDevTools(applyMiddleware(...middlewares))
)

//START SAGAS
sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <App />
        </ConnectedRouter>
    </Provider>
, document.getElementById('root'))

registerServiceWorker()
