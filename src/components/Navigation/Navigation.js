import React from 'react'
import styled from 'styled-components'
import hamburgerClosedIcon from '../../assets/icons/hamburger-closed.svg'

const NavigationContainer = styled.div`
    postion: relative;
    box-sizing: border-box;
    position: absolute;
    top: 96px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: eggshell;
    // opacity: 20%;
    // display: none;

    & > img {
        position: absolute;
        top: 20px;
        left: 24px;    
        border: 1px solid orange;
    }
`

export default function Navigation() {
    return (
        <NavigationContainer>
            <img src={hamburgerClosedIcon} alt={'close'} />
        </NavigationContainer>
    )
}
