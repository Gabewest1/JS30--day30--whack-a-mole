import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { actions as settingsActions } from "../../redux/Settings"
import { EASY, MEDIUM, HARD, VERY_HARD } from "../../constants"

class Settings extends React.Component {
    render() {
        const { setAudioLevel } = this.props

        return (
            <SettingsView>
                <AudioView>
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
                    <Difficulty onClick={ this._setDifficulty.bind(this, EASY) }>Easy</Difficulty>
                    <Difficulty onClick={ this._setDifficulty.bind(this, MEDIUM) }>Medium</Difficulty>
                    <Difficulty onClick={ this._setDifficulty.bind(this, HARD) }>Hard</Difficulty>
                    <Difficulty onClick={ this._setDifficulty.bind(this, VERY_HARD) }>You Know the Way</Difficulty>
                </DifficultyView>
            </SettingsView>
        )
    }

    _setDifficulty = (difficulty) => {
        this.props.setDifficulty(difficulty)
    }
}

const Difficulty = styled.div``
const AudioView = styled.div`

`
const DifficultyView = styled.div`

`
const SettingsView = styled.div`

`

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...settingsActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)