import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    margin-top: 48px;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 4px;
    background: #FEFEFE;
    padding: 20px;

    @media (min-width: 768px) {
        width: 332px;
    }

    &:hover {
        border: 1px solid #E3FCE3;
    }

    &:active {
        background: #FAFAFA;
        border: 2px solid #60BF60;
    }

    & > .heading {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #414141;
        margin: 0px;
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            width: 332px;
        }
    }

    & > .body {
        margin: 8px 0px 16px 0px;
        min-height: 60px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #414141;
        // border: 1px dotted orange;
    }

    & > .card-link {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #6082BF;
        text-decoration: none;
    }
`

export default function FeatureCard(props) {
    const { title, body, textLink } = props

    return (
        <CardContainer>
            <p className={'heading'}>{title}</p>
            <p className={'body'}>{body}</p>
            <p className={'card-link'}>{textLink}</p>
        </CardContainer>
    )
}
