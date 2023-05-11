import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./views/Home"
import "./css/style.css"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path = "/portfolio" element = {<Home/>} />
      </Routes>
    </div>
  )
}

export default App
