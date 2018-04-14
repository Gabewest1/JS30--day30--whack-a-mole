import React from "react"
import styled from "styled-components"
import Link from "../../components/Link"

export default class Home extends React.Component {
    render() {
        return (
            <HomeView>
                <Title>Whack A Idiot</Title>
                <SubTitle>Family Fun</SubTitle>

                <GameOptions>
                    <Option><Link to="/whack-a-mole">Play</Link></Option>
                    <Option><Link to="/settings">Settings</Link></Option>
                </GameOptions>
            </HomeView>
        )
    }
}

const Title = styled.h1``
const SubTitle = styled.h3``
const Option = styled.li``
const GameOptions = styled.ul``
const HomeView = styled.div`

`