import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'
import Button from '../Button'

const NavigationContainer = styled.nav`
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

    & > .menu-button {
        margin-top: 104px;

        @media (min-width: 768px) {
            display: none;
        }
    }

    & > .menu-section {
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
    }
`

export default function Navigation() {
    return (
        <NavigationContainer>
            <Link to={'/'}>
                <ListItem type={'default'} className={'home'} text={'Home'} />
            </Link>
            {/* <ListItem type={'default'} className={'home'} text={'Home'} /> */}

            <p className={'menu-section'}>{'UX Designer'}</p>
            <ListItem type={'sub'} className={''} text={'Vaxx Overflow'} />
            <ListItem type={'sub'} className={''} text={'Mentor Hub'} />
            <ListItem type={'sub'} className={''} text={'V School Map'} />

            <p className={'menu-section'}>{'Developer'}</p>
            <ListItem type={'sub'} className={''} text={'Project 1'} />
            <ListItem type={'sub'} className={''} text={'Project 2'} />
            <ListItem type={'sub'} className={''} text={'Project 3'} />

            <ListItem type={'default'} className={'contact-title'} text={'Contact'} />
            <ListItem type={'default'} className={'about-title'} text={'About'} />

            <Button 
                type={'secondary'}
                buttonText={'Close menu'} 
                className={'menu-button'}
            />
        </NavigationContainer>
    )
}
