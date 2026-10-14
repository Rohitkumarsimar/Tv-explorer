import React from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Home from './pages/Home'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
