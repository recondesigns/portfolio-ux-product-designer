import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background: lightcoral;

    & > p {
        margin: 0px;
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <p>Header</p>
        </HeaderContainer>
    )
}
