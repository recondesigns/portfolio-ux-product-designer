import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppState'
import { black, white, green } from '../../colors/'

const NavigationContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 96px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 68px 24px 0px 24px;
    background: ${white.default};
    display: ${props => props.display};
    z-index: 2;
    // border: 1px dotted red;

    @media (min-width: 768px) {
        display: block;
        width: 236px;
    }

    & > .home-link {
        margin-bottom: 4px;
        // border: 1px dotted red;

        &:hover {
            font-weight: 500;
            color: ${green.default};
        }
    }

    & > .list-item {
        margin-bottom: 4px;
        // border: 1px dotted blue;
    }

    & > .list-sub-item {
        margin-bottom: 4px;
        padding: 0px 0px 0px 16px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        // border: 2px solid green;

        &:hover {
            font-weight: 500;
            color: ${green.default};
        }
    }
`

const Item = styled(Link)`
    margin: 0px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: ${black.default};
    text-decoration: none;
    // border: 1px dotted orange;
`

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useContext(AppContext)

    function openCloseMenu() {
        if (isMenuOpen === false) {
            return 'none'
        } else if (isMenuOpen === true) {
            return 'block'
        }
    }

    function closeMenu() {
        if (isMenuOpen === true) {
            setIsMenuOpen(() => false)
        }
    }

    let navPosition = openCloseMenu()

    return (
        <NavigationContainer display={navPosition}>
            <Item 
                to={'/'}
                className={'home-link'}
                onClick={() => closeMenu()}
            >{'Home'}</Item>

            <Item 
                to={'/'}
                className={'list-item'}
                onClick={() => closeMenu()}
            >{'Other UX Projects'}</Item>

            <Item 
                to={'/project-one'}
                className={'list-sub-item'}
                onClick={() => closeMenu()}
            >{'Vaxx Overflow'}</Item>

            <Item 
                to={'/project-two'}
                className={'list-sub-item'}
                onClick={() => closeMenu()}
            >{'Mentor Hub'}</Item>

            <Item 
                to={'/project-three'}
                className={'list-sub-item'}
                onClick={() => closeMenu()}
            >{'V School Map'}</Item>
        </NavigationContainer>
    )
}
