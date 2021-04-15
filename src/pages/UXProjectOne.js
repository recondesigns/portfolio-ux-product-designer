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
    // border: 1px solid orange;
    z-index: 1;

    & > p {
        position: absolute;
        top: calc(50% - 24px/2);
        left: calc(50% - 200px/2);
        width: 200px;
        height: 24px;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
    }
`

export default function ProjectOne() {
    return (
        <PageContainer>
            <p>Project one page</p>
        </PageContainer>
    )
}
