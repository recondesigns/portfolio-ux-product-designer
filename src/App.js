import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Navigation from './components/Navigation/Navigation'

const AppContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 0;
  display: grid;
  grid-template-columns: [app-start] 16px repeat(4, 1fr) 16px [app-end];
  grid-template-rows: 96px auto;
  grid-column-gap: 16px;
  box-sizing: border-box;
  border: 2px solid purple;

  @media (min-width: 768px) {
    grid-template-columns: [app-start] 24px repeat(12, 1fr) 24px [app-end];
    grid-template-rows: 56px auto;  
    grid-column-gap: 20px;
    // background: pink;
  }

  & > .page-wrapper {
    z-index: 1;
    grid-column: app-start / app-end;
    grid-row: 2;
    padding: 64px 16px 0px 16px;
    border: 2px dashed blue;

    @media (min-width: 768px) {
      grid-column: 4 / span 12;
      // background: pink;
    }

    & > p {
      border: 1px solid orange;
      margin: 0px 0px 20px 0px;
    }
  }
`

export default function App() {
  
  return (
    <AppContainer>
      <Header />
      <Navigation />
      <div className={'page-wrapper'}>
        <p>Page</p>
      </div>
    </AppContainer>
  )
}
