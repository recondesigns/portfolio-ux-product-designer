import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'

const AppContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  box-sizing: border-box;
  height: 100vh;
  // border: 2px solid black;
`

export default function App() {
  
  return (
    <AppContainer>
      <Header />
      <Navigation />
    </AppContainer>
  )
}
