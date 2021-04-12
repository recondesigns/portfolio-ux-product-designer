import React from 'react'
import styled from 'styled-components'
import PageControls from '../components/PageControls'
import { white, black } from '../colors'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: ${white.default};
    z-index: 1;
    // border: 1px solid orange;

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
        color: ${black.default};
        // border: 1px dotted orange;
    }

    & > .controls-wrapper {
        box-sizing: border-box;
        position: absolute;
        top: 96px;
        left: 24px;
        right: 24px;
        display: flex;
        align-items: center;
        height: 20px;
        // background: lightgray;

        & > .control-one {
            box-sizing: border-box;
            margin-right: 8px;
        }
    }
`

export default function LandingPage() {
    return (
        <PageContainer>
            <p className={'page-header'}>{'Project Name'}</p>
            <div className={'controls-wrapper'}>
                <PageControls className={'control-one'} icon={'figma'} label={'View on Figma'} />
                <PageControls className={'control-two'} icon={'github'} label={'View on GitHub'} />

            </div>
        </PageContainer>
    )
}
