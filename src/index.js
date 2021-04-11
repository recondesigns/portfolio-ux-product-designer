import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import AppState from './context/AppState'
import App from './App';
import './index.css';

function Index() {
  return (
    <Router>
      <AppState>
        <App />
      </AppState>
    </Router>
  )
}

ReactDOM.render(
    <Index />, document.getElementById('root')
)