import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { Provider } from "react-redux"
import createHistory from "history/createBrowserHistory"
import { browserHistory, Route, Link } from "react-router-dom"
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers"
import sagas from "./sagas"

import registerServiceWorker from './registerServiceWorker'
import './index.css'

import WhackAMole from './pages/WhackAMole'
import Home from './pages/Home'
import Settings from './pages/Settings'

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
            <div>
                <Route exact path='/' component={ Home } />
                <Route exact path='/whack-a-mole' component={ WhackAMole } />
                <Route exact path='/settings' component={ Settings } />
            </div>
        </ConnectedRouter>
    </Provider>
, document.getElementById('root'))

registerServiceWorker()
