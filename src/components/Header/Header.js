import React from 'react'
import styled from 'styled-components'
import { white } from '../../colors'
import hamburgerIcon from '../../assets/icons/hamburger.svg'

const HeaderContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 96px;
    border: 1px solid lightblue;
    background: ${white.default};
    
    & > img {
        position: absolute;
        top: 60px;
        left: 24px;
        border: 1px solid orange;
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <img src={hamburgerIcon} alt={'menu'} />
        </HeaderContainer>
    )
}
