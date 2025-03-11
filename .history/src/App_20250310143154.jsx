import React from 'react'
import { BrowserRouter , Routes, Route  } from "react-icons" 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import About from './Pages/About'
import Countries from './components/Countries'
import Services from './Pages/Services'
import Contact from './Pages/Contact'


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Countries' element={<Countries/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
