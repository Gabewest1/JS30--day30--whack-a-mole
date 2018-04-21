import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import {
    actions as settingActions,
    selectors as settingSelectors
} from "../../redux/Settings"
import { EASY, MEDIUM, HARD, VERY_HARD } from "../../constants"

class Settings extends React.Component {
    render() {
        const { difficulty, setAudioLevel } = this.props

        return (
            <SettingsView>
                <div>
                    <AudioView>
                        <label htmlFor="audio">Audio</label>
                        <input 
                            type="range"
                            name="audio"
                            min={0}
                            max={1}
                            step={ .1 } 
                            onChange={ (e) => setAudioLevel(e.target.value) }
                        />
                    </AudioView>

                    <DifficultyView>
                        <Difficulty 
                            onClick={ this._setDifficulty.bind(this, EASY) }
                            active={ difficulty === EASY }
                        >
                            Easy
                        </Difficulty>
                        <Difficulty 
                            onClick={ this._setDifficulty.bind(this, MEDIUM) }
                            active={ difficulty === MEDIUM }
                        >
                            Medium
                        </Difficulty>
                        <Difficulty 
                            onClick={ this._setDifficulty.bind(this, HARD) }
                            active={ difficulty === HARD }
                        >
                            Hard
                        </Difficulty>
                        <Difficulty 
                            onClick={ this._setDifficulty.bind(this, VERY_HARD) }
                            active={ difficulty === VERY_HARD }
                        >
                            You
                        Know the Way</Difficulty>
                    </DifficultyView>
                </div>
            </SettingsView>
        )
    }

    _setDifficulty = (difficulty) => {
        this.props.setDifficulty(difficulty)
    }
}

const Difficulty = styled.div`
    ${({ active }) => active && "color: yellow" };
    cursor: pointer;
    display: inline-block;
`
const AudioView = styled.div`
    display: inline-block;
    border-bottom: solid 2px white;
    margin-bottom: 10px;
    padding-bottom: 10px;
    
    label {
        margin-right: 15px;
    }
`
const DifficultyView = styled.div`
    display: flex;
    flex-direction: column;
`
const SettingsView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 32px;
`

function mapStateToProps(state) {
    return {
        difficulty: settingSelectors.getDifficulty(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...settingActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)