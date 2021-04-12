import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { LandingPage, ProjectOne, ProjectTwo, ProjectThree } from './pages'

const AppContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  box-sizing: border-box;
  height: 100vh;
  z-index: 2;
  // border: 2px solid black;

  & > p {
    position: absolute;
    top: 140px;
  }

  & > .switch-container {
    box-sizing: border-box;
    position: absolute;
    top: 96px;
    height: 100%;
    width: 100%;
    // border: 1px solid black;
  }
`

export default function App() {
  
  return (
    <AppContainer>
      <Header />
      <Navigation />
      <div className={'switch-container'}>
        <Switch>
          <Route exact path={'/'}><LandingPage /></Route>
          <Route path={'/project-one'}><ProjectOne /></Route>
          <Route path={'/project-two'}><ProjectTwo /></Route>
          <Route path={'/project-three'}><ProjectThree /></Route>
        </Switch>
      </div>   
    </AppContainer>
  )
}
