import * as constants from "./constants"

const initialSettingState = { 
    difficulty: false,
    audio: 1
}

function settingsReducer(state = initialSettingState, action) {
    const { payload, type } = action

    switch (type) {
        case constants.SET_AUDIO_LEVEL:
            return { ...state, audio: action.payload }
        case constants.SET_DIFFICULTY:
            return { ...state, difficulty: action.payload }
        default:
            return state
    }
}

export default settingsReducer
