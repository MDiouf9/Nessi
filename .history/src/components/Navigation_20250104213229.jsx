import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

const Navigation = () => {
  return (
    <div className='gap-'>
        <Link to={Home} >Accueille</Link>
        <Link to={About} >A propos</Link>
    </div>
  )
}

export default Navigation