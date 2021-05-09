import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './context/AppState'
import { BrowserRouter as Router } from 'react-router-dom'
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