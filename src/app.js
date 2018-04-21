import React from 'react'
import styled from "styled-components"
import { Route } from "react-router-dom"
import WhackAMole from './pages/WhackAMole'
import Home from './pages/Home'
import Settings from './pages/Settings'

export default props => (
    <App { ...props }>
        <Route exact path='/' component={ Home } />
        <Route exact path='/whack-a-mole' component={ WhackAMole } />
        <Route exact path='/settings' component={ Settings } />
    </App>
)

const App = styled.div`
    min-height: 100vh;

    > * {
        height: 100vh;
    }
`