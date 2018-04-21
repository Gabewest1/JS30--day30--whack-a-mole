import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Button from "../../components/Button"

import { 
    actions as whackAMoleActions,
    selectors as whackAMoleSelectors
} from "../../redux/WhackAMole"

class WhackAMole extends React.Component {
    componentDidMount() {
        this._startGame()
    }
    render() {
        const { performMove, score, time, moles, isGameOver } = this.props

        const Moles = moles.map((mole, i) => (
            <MoleView 
                key={ i }
                mole={ mole }
                onMouseDown={ mole.isActive ? () => performMove(i): null } 
            />
        ))

        return (
            <WhackAMoleView>
                <HUD>
                    <ScoreView>Score: { score }</ScoreView>
                    <TimeView>Time Remaining: { time }</TimeView>
                </HUD>

                { isGameOver
                    && <PlayAgainButton onClick={ this._startGame }>Play Again</PlayAgainButton>
                }

                <MolesView>
                    { Moles }
                </MolesView>

            </WhackAMoleView>
        )
    }

    _startGame = () => {
        this.props.resetGame()
        this.props.startGame()
    }
}

const WhackAMoleView = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TimeView = styled.div``
const ScoreView = styled.div``
const TitleView = styled.div``
const Mole = styled.img`
    transform: translateY(${({ mole }) => mole.isActive ? "0%" : "130%"});
    transition: all .2s ease-in-out;
    max-width: 100%;
`
const PlayAgainButton = styled(Button)`
    position: absolute;
    top: 25%;
`
const Dirt = styled.img`
    max-width: 100%;
    z-index: 1;
    position: relative;
    top: 14px;
`
const MoleView = ({ mole, ...props }) => (
    <div { ...props } style={{ width: 150, position: "relative", overflow: "hidden" }}>
        <Mole src={ mole.isWhacked ? "/mole_sprite_active.png" : "/mole_sprite.png" } mole={ mole } />
        <Dirt src="dirt_sprite.png" />
    </div>
)
const HUD = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    font-size: 24px;
    margin-top: 1em;
`
const MolesView = styled.div`
    position: absolute;
    bottom: 20%;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-around;

    > *:nth-child(1) {
        top: 100px;
    }
    > *:nth-child(3) {
        top: 66px;
    }
`
function mapStateToProps(state) {
    return {
        moles: whackAMoleSelectors.getMoles(state),
        time: whackAMoleSelectors.getTime(state),
        score: whackAMoleSelectors.getScore(state),
        isGameOver: whackAMoleSelectors.isGameOver(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...whackAMoleActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WhackAMole)