import React from 'react'
import styled from 'styled-components'
import hamburgerIcon from '../assets/icons/hamburger.svg'

const HeaderContainer = styled.div`
    z-index: 3;
    grid-column: app-start / app-end;
    grid-row: 1;
    background: white;
    // border: 2px dashed black;
    
    @media (min-width: 768px) {
        
    }

    & > img {
        margin: 60px 0px 0px 16px;
        width: 20px;
        height: 20px;
        // border: 1px solid orange;

        @media (min-width: 768px) {
            display: none;
        }
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <img src={hamburgerIcon} alt={'menu'} />
        </HeaderContainer>
    )
}
