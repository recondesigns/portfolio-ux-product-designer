import React from 'react'
import styled from 'styled-components'
import PageControls from '../components/PageControls'

import { black } from '../colors'

const PageHeaderContainer = styled.div`
    box-sizing: border-box;
    padding: 52px 24px 20px 24px;
    // position: absolute;
    // top: 0px;
    // left: 0px;
    // right: 0px;
    height: auto;
    // border: 1px solid blue;

    @media (min-width: 768px) {
        // padding: 56px 280px 56px 280px;
        padding-left: 280px;
        padding-right: 280px;
    }

    & > .page-header {
        box-sizing: border-box;
        // position: absolute;
        // top: 52px;
        // left: 0px;
        // right: 0px;
        margin: 0px 0px 16px 0px;
        height: 28px;
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
        // position: absolute;
        // top: 96px;
        // left: 0px;
        // right: 0px;
        display: flex;
        align-items: center;
        height: 20px;
        // background: lightgray;
        // border: 1px dotted orange;

        & > .one {
            margin-right: 8px;
        }
    }
`

export default function PageHeader(props) {
    const { 
        heading,
        controlOne,
        controlTwo 
    } = props

    const { iconOne, labelOne } = controlOne
    const { iconTwo, labelTwo } = controlTwo

    return (
        <PageHeaderContainer>
            <p className={'page-header'}>{heading}</p>
            <div className={'controls-wrapper'}>
                <PageControls className={'one'} icon={iconOne} label={labelOne} />
                <PageControls className={'two'} icon={iconTwo} label={labelTwo} />
            </div>
        </PageHeaderContainer>
    )
}
