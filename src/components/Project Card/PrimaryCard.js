import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { black, green, white } from '../../colors'

const CardContainer = styled.div`
    margin-right: 20px;
    padding: 20px 20px 20px 20px;
    min-width: 260px;
    border: 1px solid #E6E6E6;
    background: ${white.default};
    border-left: 2px solid ${green.default};
    // border-radius: 4px;

    @media (min-width: 768px) {
        margin-right: 12px;
        min-width: 328px;
    }

    & > .heading {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: ${black.default};
        // border: 1px dotted orange;
    }

    & > .body {
        margin: 8px 0px 16px 0px;
        max-height: 60px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #{black.default};
        overflow: hidden;
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            max-height: 40px 
        }
    }

    & > .button-container {
        display: flex;
        justify-content: flex-end;
        // background: lightgray;

        & > .card-button {
            background: none;
            padding: 8px 4px 8px 4px; 
            color: ${green.default};
            // border: 1px dotted red;
        }
    }
    
`

export default function PrimaryCard(props) {
    const { heading, body, buttonText } = props
    
    return (
        <CardContainer>
            <p className={'heading'}>{heading}</p>
            <p className={'body'}>{body}</p>
            <div className={'button-container'}>
                <Button buttonText={buttonText} className={'card-button'} />
            </div>
        </CardContainer>
    )
}
