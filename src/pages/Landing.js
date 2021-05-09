import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    height: 100%;
    padding: 0px 16px 0px 16px;
    background: lightblue;

    & > .title {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: #414141;
        border: 1px solid red;
    }

    & > .body {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #414141;
        border: 1px solid green;
    }
`

export default function Landing() {
    return (
        <PageContainer>
            <p className={'title'}>{'Howdy. I am Stedman.'}</p>
            <p className={'body'}>{'I am a UX/Product Designer. I craft digital experiences with collaborative UX research & design methods.'}</p>
        </PageContainer>
    )
}
