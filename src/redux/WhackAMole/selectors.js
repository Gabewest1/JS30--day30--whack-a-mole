export const getMoles = state => {
    const { moles } = state.whackAMole
    
    return Object.keys(moles)
        .map(key => moles[key])
}
export const getScore = state => state.whackAMole.score
export const getTime = state => state.whackAMole.time / 1000
export const isGameOver = state => getTime(state) <= 0
export const getUnactiveMole = state => {
    const moles = getMoles(state)
    let maxTries = 6
    let mole = -1

    while (mole < 0 && maxTries > 0) {
        let maxIndex = moles.length
        let index = Math.floor(Math.random() * maxIndex)
        let isUnactiveMole = moles[index].isActive === false

        if (isUnactiveMole) {
            mole = index
        }

        maxTries--
    }

    return mole
}