import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

const Navigation = () => {
  return (
    <div>
        <Link to={Home} >Accueille</Link>
        <Link to={Home} >Accueille</Link>
    </div>
  )
}

export default Navigation