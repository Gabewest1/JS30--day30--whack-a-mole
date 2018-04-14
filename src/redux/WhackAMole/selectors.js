export const getMoles = state => {
    const { moles } = state.whackAMole
    
    return Object.keys(moles)
        .map(key => moles[key])
}
export const getScore = state => state.whackAMole.score
export const getTime = state => state.whackAMole.time / 1000
export const isGameOver = state => getTime(state) <= 0