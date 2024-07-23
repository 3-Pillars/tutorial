import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Pillar from "./Components/Pillar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="app-container">
        <div id="pillar-box">
          <Pillar placement="left"/>
          <Pillar placement="center"/>
          <Pillar placement="right"/>
        </div>
        <div id="header">
          <img src={logoName} style={{width: "90%"}}/>
        </div>
      </div>
    
    </>
  )
}

export default App
