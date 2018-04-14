// import { constants, actions, selectors } from "./index"
import * as constants from "./constants"
import { combineReducers } from "redux"

const initialMoleState = { isActive: false }
function moleReducer(state = initialMoleState, action) {
    switch (action.type) {
        case constants.ACTIVATE_MOLE:
            return { ...state, active: true }
        case constants.DEACTIVATE_MOLE:
            return { ...state, active: false }
        case constants.RESET_GAME:
            return initialMoleState
        default:
            return state
    }
}

const initialMolesState = {
    0: initialMoleState, 
    1: initialMoleState, 
    2: initialMoleState, 
    3: initialMoleState
}
function molesReducer(state = initialMolesState, action) {
    const { payload, type } = action

    switch (type) {
        case constants.ACTIVATE_MOLE:
        case constants.DEACTIVATE_MOLE:
            return { ...state, [payload]: moleReducer(state[payload], action) }        
        case constants.RESET_GAME:
            return initialMoleState
        default:
            return state
    }
}

function timeReducer(state = 60000, action) {
    switch (action.type) {
        case constants.TICK:
            return state - 1000
        case constants.RESET_GAME:
            return 60000
        default:
            return state
    }
}

function scoreReducer(state = 0, action) {
    switch (action.type) {
        case constants.INCREASE_SCORE:
            return state + 1
        case constants.RESET_GAME:
            return 0
        default:
            return state
    }
}

export default combineReducers({
    moles: molesReducer,
    time: timeReducer,
    score: scoreReducer
})
