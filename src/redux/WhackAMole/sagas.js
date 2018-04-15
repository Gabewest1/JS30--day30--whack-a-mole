import { actions, constants, selectors } from "./index"
import { delay } from "redux-saga"
import { call, cancel, fork, put, select, takeEvery } from "redux-saga/effects"

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
    const timerFork = yield fork(startTimer)
    const molesFork = yield fork(startMoles)

    while (!(yield select(selectors.isGameOver))) {
        
    }

    yield cancel(timerFork)
    yield cancel(molesFork)
}
function* performMove(action) {
    const { payload } = action

    yield put(actions.deactivateMole(payload))
    yield put(actions.increaseScore())
}

function* startTimer() {
    while (true) {
        yield delay(1000)
        yield put(actions.decreaseTimer())
    }
}

function* startMoles() {
    while (true) {
        const x = Math.floor(Math.random() * 1000) + 200
        yield delay(x)

        const mole = yield select(selectors.getUnactiveMole)
    
        if (mole >= 0) {
            yield put(actions.activateMole(mole))
        }
    }
}
