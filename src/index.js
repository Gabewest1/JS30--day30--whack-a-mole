import React from 'react'
import ReactDOM from 'react-dom'
import WhackAMole from './pages/WhackAMole'
import Home from './pages/Home'

import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { Provider } from "react-redux"
import createHistory from "history/createBrowserHistory"
import { browserHistory, Route, Link } from "react-router-dom"
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from "./reducers"
import sagas from "./sagas"

import registerServiceWorker from './registerServiceWorker'
import './index.css'

const history = createHistory()

//MIDDLEWARE SETUP
const reduxRouterMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const middlewares = [reduxRouterMiddleware, sagaMiddleware]


//CREATE STORE
let store = createStore(combineReducers(
    {...reducers, router: routerReducer}),
    applyMiddleware(...middlewares)
)

//START SAGAS
sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter>
            <Route path='/' component={ Home } />
            <Route path='/WhackAMole' component={ WhackAMole } />
        </ConnectedRouter>
    </Provider>
, document.getElementById('root'))

registerServiceWorker()
