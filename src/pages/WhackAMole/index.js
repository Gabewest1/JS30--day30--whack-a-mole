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

        const MolesView = moles.map((mole, i) => (
            <MoleView 
                key={ i }
                mole={ mole }
                onClick={ mole.isActive ? () => performMove(i): null } 
            />
        ))

        return (
            <WhackAMoleView>
                <TitleView>WhackAHoeeeee</TitleView>
                <ScoreView>{ score }</ScoreView>
                <TimeView>{ time }</TimeView>

                { MolesView }

            </WhackAMoleView>
        )
    }
}

const WhackAMoleView = styled.div``
const TimeView = styled.div``
const ScoreView = styled.div``
const TitleView = styled.div``
const MoleView = styled.div`
    background: blue;
    border-radius: 50%;
    width: 55px;
    height: 55px;
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