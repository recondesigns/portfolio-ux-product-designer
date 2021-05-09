import React from 'react'
import styled from 'styled-components'

const VaxxPageContainer = styled.div`
    height: 100%;
    padding: 0px 16px 0px 16px;
    background: lightgreen;

    & > .title {
        margin: 0px;
        border: 1px solid red;
    }

    & > .body {
        margin: 0px;
        border: 1px solid green;
    }
`

export default function VaxxOverflow() {
    return (
        <VaxxPageContainer>
            <p className={'title'}>{'Vaxx Overflow Page'}</p>
            {/* <p className={'body'}>{'Some other text.'}</p> */}
        </VaxxPageContainer>
    )
}
