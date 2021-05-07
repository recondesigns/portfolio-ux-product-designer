import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-sizing: border-box;
  border: 2px solid purple;

  & > h1 {
    box-sizing: border-box;
    margin: 0px;
  }
`

export default function App() {
  
  return (
    <AppContainer>
      <h1>App Component</h1>
    </AppContainer>
  )
}
