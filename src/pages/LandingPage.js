import React from 'react'
import styled from 'styled-components'
import { white } from '../colors'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: ${white.default};
    z-index: 1;
    overflow: scroll;
    // border: 1px dashed black;

    @media (min-width: 768px) {
        left: 260px;
    }

    & > p {
        position: absolute;
        top: calc(50% - 24px/2);
        left: 0px;
        right: 0px;
        margin: 0p;x
        width: 200px;
        height: 24px;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        // border: 1px dotted orange;
    }
`

export default function LandingPage() {

    return (
        <PageContainer>
            <p>Landing Page</p>
        </PageContainer>
    )
}
