import { sagas as navigationSagas } from "./redux/Navigation"

function* rootSaga() {
    yield [
        navigationSagas()
    ]
}

export default rootSaga
