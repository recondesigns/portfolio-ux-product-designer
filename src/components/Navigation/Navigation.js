import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'
import Button from '../Button'

const NavigationContainer = styled.nav`
    position: relative;
    z-index: 3;    
    display: none;
    flex-direction: column;
    align-items: center;
    grid-column: app-start / app-end;
    grid-row: 1 / span 3;
    background: white;
    border: 2px dashed gray;
    
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

        @media (min-width: 768px) {
            margin-top: 48px;
        }
    }

    & > .contact-title {
        margin-top: 20px;
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
    }

    & > .menu-button {
        position: absolute;
        bottom: 40px;

        @media (min-width: 768px) {
            display: none;
        }
    }
`

export default function Navigation() {
    return (
        <NavigationContainer>
            <Link to={'/'} className={'home'}>
                <ListItem type={'default'} className={'home'} text={'Home'} />
            </Link>

            <p className={'menu-section'}>{'UX Designer'}</p>

            <Link to={'/vaxx-overflow'}>
                <ListItem type={'sub'} text={'Vaxx Overflow'} />
            </Link>

            <Link to={'/mentor-hub'}>
                <ListItem type={'sub'} text={'Mentor Hub'} />
            </Link>

            <Link to={'/op-veteran'}>
                <ListItem type={'sub'} text={'OP Veteran'} />
            </Link>

            <Button 
                type={'secondary'}
                buttonText={'Close menu'} 
                className={'menu-button'}
            />
        </NavigationContainer>
    )
}
