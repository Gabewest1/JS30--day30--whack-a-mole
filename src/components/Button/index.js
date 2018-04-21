import React from "react"
import styled from "styled-components"

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 32px;
    padding: .75em 1em;
    box-sizing: border-box;
    border: 4px solid yellow;
    background: #30270f;
    border-radius: 8px;
    color: orange;
    cursor: pointer;
    margin: 0;
    
    &:hover {
        color: #e2c56e;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export default Button
