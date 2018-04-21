import { reducer as whackAMoleReducer } from "./redux/WhackAMole"
import { reducer as settingsReducer } from "./redux/Settings"

export default {
    whackAMole: whackAMoleReducer,
    settings: settingsReducer
}
