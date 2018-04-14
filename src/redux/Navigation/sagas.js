import { call, takeEvery } from "redux-saga/effects"
import { push } from "react-router-redux"
import { constants } from "./index"

export default function* rootSaga() {
    yield [
        watchNavigationSaga()
    ]
}

function* watchNavigationSaga() {
    yield takeEvery(constants.NAVIGATE_TO, navigationSaga)
    
}

function* navigationSaga({ payload }) {
    yield call(push, payload)
}