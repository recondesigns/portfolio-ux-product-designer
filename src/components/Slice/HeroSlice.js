import React from 'react'
import styled from 'styled-components'
import { black, white } from '../../colors'

const HeroContainer = styled.div`
    // box-sizing: border-box;
    position: relative;
    padding: 64px 24px 64px 24px;
    max-width: 100%;
    // height: auto;
    background: ${black.default};
    border: 1px solid green;

    & > .heading {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: ${white.default};
        border: 1px dotted orange;
    }

    & > .body {
        margin: 8px 0px 0px 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: ${white.default};
        border: 1px dotted orange;
    }
`

export default function HeroSlice(props) {
    const { heading, body, className } = props
    return (
        <HeroContainer className={className}>
            <p className={'heading'}>{heading}</p>
            <p className={'body'}>{body}</p>
        </HeroContainer>
    )
}
