import React from 'react'
import styled from 'styled-components'
import { white } from '../colors/white'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: ${white.default};
    border: 1px solid orange;
    z-index: 1;

    & > .page-header {
        margin: 0px;
        position: absolute;
        height: 28px;
        left: 24px;
        right: 24px;
        top: 52px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #414141;
        border: 1px dotted orange;
    }
`

export default function LandingPage() {
    return (
        <PageContainer>
            <p className={'page-header'}>{'Project Name'}</p>
            
        </PageContainer>
    )
}
