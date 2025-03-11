import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

const Navigation = () => {
  return (
    <div className='gap-2'>
        <Link className='m-1' to='/' >Accueille</Link>
        <Link to={About} >A propos</Link>
    </div>
  )
}

export default Navigation