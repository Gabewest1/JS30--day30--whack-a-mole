import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { 
    actions as whackAMoleActions,
    selectors as whackAMoleSelectors
} from "../../redux/WhackAMole"

class WhackAMole extends React.Component {
    componentDidMount() {
        this.props.startGame()
    }
    render() {
        const { performMove, score, time, moles } = this.props

        const Moles = moles.map((mole, i) => (
            <MoleView 
                key={ i }
                mole={ mole }
                onClick={ mole.isActive ? () => performMove(i): null } 
            />
        ))

        return (
            <WhackAMoleView>
                <ScoreView>{ score }</ScoreView>
                <TimeView>{ time }</TimeView>

                <MolesView>
                    { Moles }
                </MolesView>

            </WhackAMoleView>
        )
    }
}

const WhackAMoleView = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const TimeView = styled.div``
const ScoreView = styled.div``
const TitleView = styled.div``
const Mole = styled.img`
    transform: translateY(${({ mole }) => mole.isActive ? "0%" : "130%"});
    transition: all .2s ease-in-out;
    max-width: 100%;
`
const Dirt = styled.img`
    max-width: 100%;
    z-index: 1;
    position: relative;
    top: 14px;
`
const MoleView = ({ mole, ...props }) => (
    <div { ...props } style={{ width: 150, position: "relative", overflow: "hidden" }}>
        <Mole src="/mole_sprite.png" mole={ mole } />
        <Dirt src="dirt_sprite.png" />
    </div>
)
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
        score: whackAMoleSelectors.getScore(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...whackAMoleActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WhackAMole)