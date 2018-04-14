import { actions, constants, selectors } from "./index"
import { delay } from "redux-saga"
import { call, put, select, takeEvery } from "redux-saga/effects"

export default function* () {
    yield [
        watchStartGame(),
        watchMove()
    ]
}

function* watchStartGame() {
    yield takeEvery(constants.START_GAME, startGame)
}

function* watchMove() {
    yield takeEvery(constants.PERFORM_MOVE, performMove)
}

function* startGame(action) {
    while (!(yield select(selectors.isGameOver))) {
        yield delay(1000)
        yield call(decreaseTimer)
    }
}
function* performMove(action) {
    const { payload } = action

    yield put(actions.deactivateMole(payload))
    yield put(actions.increaseScore())
}

function* decreaseTimer() {
    yield put(actions.decreaseTimer())
}