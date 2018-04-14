import { sagas as navigationSagas } from "./redux/Navigation"
import { sagas as whackAMoleSagas } from "./redux/WhackAMole"

function* rootSaga() {
    yield [
        navigationSagas(),
        whackAMoleSagas()
    ]
}

export default rootSaga
