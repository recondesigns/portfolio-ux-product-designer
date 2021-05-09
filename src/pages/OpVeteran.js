import React from 'react'
import styled from 'styled-components'

const OpVeteranContainer = styled.div`
    height: 100%;
    padding: 0px 16px 0px 16px;
    background: lightsteelblue;

    & > .title {
        margin: 0px;
        border: 1px solid red;
    }

    & > .body {
        margin: 0px;
        border: 1px solid green;
    }
`

export default function OpVeteran() {
    return (
        <OpVeteranContainer>
            <p className={'title'}>{'OP Veteran Page'}</p>
            {/* <p className={'body'}>{'Some other text.'}</p> */}
        </OpVeteranContainer>
    )
}
