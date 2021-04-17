import React from 'react'
import styled from 'styled-components'
import { black, white } from '../../colors'

const StyledButton = styled.button`
    margin: 0px 0px 0px 0px;
    padding: 8px 16px 8px 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${white.default};
    background: ${black.default};
    border: 2px solid ${white.default};
    border-radius: 4px;

    &:hover {
        background: white;
        color: black;
    }
`

export default function Button(props) {
    const { buttonText, className, onClick } = props

    return <StyledButton className={className} onClick={onClick} >{buttonText}</StyledButton>
}
