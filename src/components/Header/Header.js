import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../context/AppState'
import { white } from '../../colors'
import hamburgerIcon from '../../assets/icons/hamburger.svg'

const HeaderContainer = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 96px;
    // border: 1px solid lightblue;
    background: ${white.default};
    z-index: 2;
    
    & > img {
        position: absolute;
        top: 60px;
        left: 24px;
        border: 1px solid orange;
    }
`

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useContext(AppContext)

    function handleClick() {
        if (isMenuOpen === false) {
            setIsMenuOpen(() => true)
        } else if (isMenuOpen === true) {
            setIsMenuOpen(() => false)
        }
    }
  
    return (
        <HeaderContainer>
            <img 
                src={hamburgerIcon} 
                alt={'menu'} 
                onClick={() => handleClick()}
            />
        </HeaderContainer>
    )
}
