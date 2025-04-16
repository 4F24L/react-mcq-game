import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import ScorePage from './pages/ScorePage'

const App = () => {
  return (
    <div>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/game' element={<GamePage/>}/>
      <Route path='/score' element={<ScorePage/>}/>
    </Routes>
    
    </div>
  )
}

export default App