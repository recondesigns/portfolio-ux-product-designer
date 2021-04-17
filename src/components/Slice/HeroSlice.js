import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Button } from '../Button'
import { black, white } from '../../colors'

const HeroContainer = styled.div`
    position: relative;
    padding: 64px 24px 64px 24px;
    max-width: 100%;
    height: auto;
    background: ${black.default};
    // border: 1px solid green;

    @media (min-width: 768px) {
        width: 100%;
        padding: 80px 118px 80px 118px;
    }

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
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            width: 566px;
            font-size: 44px;
            line-height: 48px;
        }
    }

    & > .body {
        margin: 8px 0px 40px 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: ${white.default};
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            margin-top: 12px;
            margin-bottom: 32px;
            width: 566px;
            font-size: 20px;
            line-height: 24px;
        }
    }
`

export default function HeroSlice(props) {
    let history = useHistory()
    const { heading, body, className } = props

    function goToContact() {
        history.push('/contact')
    }
    
    return (
        <HeroContainer className={className}>
            <p className={'heading'}>{heading}</p>
            <p className={'body'}>{body}</p>
            <Button 
                className={'hero-button'} 
                buttonText={`Let's collaborate`} 
                onClick={() => goToContact()}
            />
        </HeroContainer>
    )
}
