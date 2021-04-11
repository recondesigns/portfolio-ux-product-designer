import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../context/AppState'

import hamburgerClosedIcon from '../../assets/icons/hamburger-closed.svg'
import { black, white } from '../../colors/'

const NavigationContainer = styled.div`
    postion: relative;
    box-sizing: border-box;
    position: absolute;
    top: 96px;
    // left: -400px;
    left: ${props => props.left};
    width: 100%;
    height: 100%;
    background: ${white.default};
    // display: none;
    // border: 1px dotted red;
    z-index: 1;

    & > img {
        position: absolute;
        top: 20px;
        left: 24px;    
        // border: 1px solid orange;
    }
    
    & > .label {
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: ${black.default};
        // border: 1px dotted orange;
    }

    & > .label-ux {
        position: absolute;
        height: 24px;
        left: 24px;
        right: 24px;
        top: 68px;
    }

    & > .label-dev {
        position: absolute;
        height: 24px;
        left: 24px;
        right: 24px;
        top: 188px;
    }

    & > .sub-item {
        // position: absolute;
        // height: 24px;
        // left: 40px;
        // right: 24px;
        // top: 96px;
        font-family: Roboto;
        font-style: normal;
        // font-weight: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: ${black.default};
        // border: 1px dotted orange;

        &:hover {
            font-weight: 500;
        }
    }

    & > .ux-one {
        position: absolute;
        height: 24px;
        left: 40px;
        right: 24px;
        top: 96px;
    }

    & > .ux-two {
        position: absolute;
        height: 24px;
        left: 40px;
        right: 24px;
        top: 124px;
    }

    & > .ux-three {
        position: absolute;
        height: 24px;
        left: 40px;
        right: 24px;
        top: 152px;
    }

    & > .dev-one {
        position: absolute;
        height: 24px;
        left: 40px;
        right: 24px;
        top: 216px;
    }

    & > .dev-two {
        position: absolute;
        height: 24px;
        left: 40px;
        right: 24px;
        top: 244px;
    }

    & > .dev-three {
        position: absolute;
        height: 24px;
        left: 40px;
        right: 24px;
        top: 272px;
    }
`

export default function Navigation() {
    const [isMenuOpen] = useContext(AppContext)
    console.log(isMenuOpen)

    function openCloseMenu() {
        if (isMenuOpen === false) {
            // console.log('it is false and not open')
            return '-400px'
        } else if (isMenuOpen === true) {
            // console.log('it is true and is open')
            return '0px'
        }
    }

    let navPosition = openCloseMenu()

    console.log(navPosition)

    return (
        <NavigationContainer left={navPosition}>
            <img src={hamburgerClosedIcon} alt={'close'} />
            <p className={'label label-ux'}>{'UX Designer'}</p>
            <p className={'sub-item ux-one'}>{'Project name'}</p>
            <p className={'sub-item ux-two'}>{'Project name'}</p>
            <p className={'sub-item ux-three'}>{'Project name'}</p>

            <p className={'label label-dev'}>{'UX Designer'}</p>
            <p className={'sub-item dev-one'}>{'Project name'}</p>
            <p className={'sub-item dev-two'}>{'Project name'}</p>
            <p className={'sub-item dev-three'}>{'Project name'}</p>

        </NavigationContainer>
    )
}
