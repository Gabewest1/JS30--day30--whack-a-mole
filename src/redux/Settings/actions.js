import { constants } from "./index"

export const setDifficulty = payload => ({ type: constants.SET_DIFFICULTY, payload })
export const setAudioLevel = payload => ({ type: constants.SET_AUDIO_LEVEL, payload })
export const setNumberOfMoles = payload => ({ type: constants.SET_NUMBER_OF_MOLES, payload })
