import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppState'
import { white, green } from '../../colors'
import hamburgerIcon from '../../assets/icons/hamburger.svg'
import closeIcon from '../../assets/icons/hamburger-closed.svg'

const HeaderContainer = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 96px;
    // border: 1px solid lightblue;
    z-index: 3;
    background: ${white.default};
    
    & > img {
        position: absolute;
        top: 60px;
        left: 24px;
        // border: 1px solid orange;

        @media (min-width: 768px) {
            visibility: hidden;
        }
    }

    & > .home-link {
        width: 120px;
        height: 20px;
        position: absolute;
        top: 60px;
        left: calc(50% - 120px/2);
        font-size: 20px;
        color: ${green.default};
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        // border: 1px dotted orange;
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

    function hideMenu() {
        if (isMenuOpen === false) {
            return hamburgerIcon
        } else if (isMenuOpen === true) {
            return closeIcon
        }
    }

    let iconState = hideMenu()

    return (
        <HeaderContainer>
            <img 
                src={iconState} 
                alt={'menu'} 
                onClick={() => handleClick()}
            />
            <Link to={'/'} className={'home-link'} >{'Home'}</Link>
        </HeaderContainer>
    )
}
