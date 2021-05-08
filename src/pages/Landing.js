import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    height: 100%;
    padding: 0px 16px 0px 16px;
    background: lightblue;

    & > .title {
        margin: 0px;
        border: 1px solid red;
    }

    & > .body {
        margin: 0px;
        border: 1px solid green;
    }
`

export default function Landing() {
    return (
        <PageContainer>
            <p className={'title'}>{'Howdy. I am Stedman'}</p>
            {/* <p className={'body'}>{'Some other text.'}</p> */}
        </PageContainer>
    )
}
