import { actions, constants, selectors } from "./index"
import { delay } from "redux-saga"
import { call, cancel, fork, put, select, take, takeLatest } from "redux-saga/effects"

export default function* () {
    yield [
        watchStartGame(),
    ]
}

function* watchStartGame() {
    yield takeLatest(constants.START_GAME, startGame)
}

function* watchMoves() {
    while (true) {
        const { payload } = yield take(constants.PERFORM_MOVE)

        yield put(actions.deactivateMole(payload))
        yield put(actions.increaseScore())
    }
}

function* startGame(action) {
    const timerFork = yield fork(startTimer)
    const molesFork = yield fork(startMoles)
    const watchMovesFork = yield fork(watchMoves)

    while (!(yield select(selectors.isGameOver))) {
        yield delay(1000)
    }

    yield cancel(timerFork)
    yield cancel(molesFork)
    yield cancel(watchMovesFork)
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
            yield fork(startMole, mole)
        }
    }
}

function* startMole(mole) {
    const timeInAir = Math.floor(Math.random() * 1000) + 400    
    yield put(actions.activateMole(mole))
    yield delay(timeInAir)
    yield put(actions.deactivateMole(mole))
}