import React from "react"
import styled from "styled-components"

import Button from "../../components/Button"
import Link from "../../components/Link"

export default class Home extends React.Component {
    render() {
        return (
            <HomeView>
                <Title>Do you Whack the Way?</Title>

                <GameOptions>
                    <Option><Link to="/whack-a-mole">Play</Link></Option>
                    <Option><Link to="/settings">Settings</Link></Option>
                </GameOptions>
            </HomeView>
        )
    }
}

const Title = styled.h1`
    color: white;
    font-size: 48px;
    margin: 0;
    flex-basis: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SubTitle = styled.h3``
const Option = styled(Button)`
    a {
        text-decoration: none;
        color: inherit;
    }
`
const GameOptions = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    flex-basis: 75%;
    
    > * {
        margin-bottom: 20px;
    }
`
const HomeView = styled.div`
    display: flex;
    flex-direction: column;
`