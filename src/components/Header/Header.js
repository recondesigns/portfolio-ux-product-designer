import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100%;
    height: 96px;
    border: 1px solid lightblue;
`

export default function Header() {
    return (
        <HeaderContainer>
            <p>Header</p>
        </HeaderContainer>
    )
}
