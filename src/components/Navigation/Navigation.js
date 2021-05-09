import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppStateContext } from '../../context/AppState'
import ListItem from './ListItem'
import Button from '../Button'

const NavigationContainer = styled.nav`
    position: relative;
    z-index: 3;    
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    grid-column: app-start / app-end;
    grid-row: 1 / span 3;
    background: #FEFEFE;
    // border: 2px dashed gray;
    
    @media (min-width: 768px) {
        display: flex;
        grid-column: app-start / span 3;
        grid-row: 2 / span 2;
        z-index: 2;
    }

    & > .home {
        margin-top: 144px;
        color: #6082BF;
        text-transform: uppercase;
        border-radius: 4px;
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            margin-top: 48px;
        }
    }

    & > .about {
        color: #6082BF;
        border-radius: 4px;
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            // margin-top: 48px;
        }
    }

    & > .contact {
        margin-top: 20px;
        color: #6082BF;
        border-radius: 4px;
        // border: 1px dotted orange;
    }

    & > a {
        text-decoration: none;
    }

    & > .menu-section {
        box-sizing: border-box;
        width: 164px;
        height: 36px;
        margin: 20px 0px 0px 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #414141;
        border-radius: 4px;
        // border: 1px dotted orange;

    }

    & > .menu-button {
        margin-top: 80px;

        @media (min-width: 768px) {
            display: none;
        }
    }
`

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useContext(AppStateContext)

    function setMobileDisplay(status) {
        if (status === false) {
            return 'none'
        } else if (status === true) {
            return 'flex'
        }
    }

    let mobileDisplay = setMobileDisplay(isMenuOpen)

    function closeMenu() {
        setIsMenuOpen(() => false)
    }

    return (
        <NavigationContainer display={mobileDisplay}>
            <Link to={'/'} className={'home'} onClick={() => closeMenu()}>
                <ListItem type={'default'} className={'home'} text={'Home'} />
            </Link>

            <p className={'menu-section'}>{'UX Designer'}</p>

            <Link to={'/vaxx-overflow'} onClick={() => closeMenu()}>
                <ListItem type={'sub'} text={'Vaxx Overflow'} />
            </Link>

            <Link to={'/mentor-hub'} onClick={() => closeMenu()}>
                <ListItem type={'sub'} text={'Mentor Hub'} />
            </Link>

            <Link to={'/op-veteran'} onClick={() => closeMenu()}>
                <ListItem type={'sub'} text={'OP Veteran'} />
            </Link>

            <Link to={'/'} className={'contact'} onClick={() => closeMenu()}>
                <ListItem type={'default'} text={'Contact'} />
            </Link>

            <Link to={'/'} className={'about'} onClick={() => closeMenu()}>
                <ListItem type={'default'} text={'About'} />
            </Link>

            <Button 
                type={'secondary'}
                buttonText={'Close menu'} 
                className={'menu-button'}
                onClick={() => closeMenu()}
            />
        </NavigationContainer>
    )
}
