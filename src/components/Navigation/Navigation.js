import React from 'react'
import styled from 'styled-components'

const NavigationContainer = styled.nav`
    z-index: 3;
    // display: none;
    grid-column: app-start / app-end;
    grid-row: 1 / span 2;
    background: white;
    border: 2px dashed gray;
    
    @media (min-width: 768px) {
        grid-column: app-start / span 3;
        display: block;
        z-index: 2;
    }

    & > p {
        margin: 0px;
    }
`

export default function Navigation() {
    return (
        <NavigationContainer>
            <p>Navigation</p>
        </NavigationContainer>
    )
}
