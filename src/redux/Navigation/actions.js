import { constants } from "./index"

export const navigateto = url => ({ type: constants.NAVIGATE_TO, payload: url })
