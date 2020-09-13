import React from 'react'
import Header from './components/Header'
import Explanation from './components/Explanation'
import Home from './components/Home'
import Pratice from './components/Pratice'
import About from './components/About'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <Explanation />
        <Pratice />
        <About />
      </div>
    </>
  )
}

export default App
