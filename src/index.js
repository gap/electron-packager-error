import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'

const target = document.querySelector('#root')

render(
    <div>
      <App />
    </div>,
    target
  )
