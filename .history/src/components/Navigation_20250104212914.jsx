import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

const Navigation = () => {
  return (
    <div>
        <Link to={Home} >Accue</Link>
    </div>
  )
}

export default Navigation