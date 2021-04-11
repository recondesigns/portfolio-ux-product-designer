import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
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
