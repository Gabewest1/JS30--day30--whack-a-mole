import { constants } from "./index"

export const performMove = move => ({ type: constants.PERFORM_MOVE, payload: move })
export const activateMole = mole => ({ type: constants.ACTIVATE_MOLE, payload: mole })
export const deactivateMole = mole => ({ type: constants.DEACTIVATE_MOLE, payload: mole })
export const increaseScore = () => ({ type: constants.INCREASE_SCORE })
export const decreaseTimer = () => ({ type: constants.TICK })
export const startGame = () => ({ type: constants.START_GAME })
export const resetGame = () => ({ type: constants.RESET_GAME })