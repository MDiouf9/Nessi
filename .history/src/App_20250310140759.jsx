import React from 'react'
import { BrowserRouter , Routes, Route  } from "react-router-dom" 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import About from './Pages/About'
import Countries from './components/Countries'


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={</>} />
        <Route path='/Countries' element={<Countries/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
