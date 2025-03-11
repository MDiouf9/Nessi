import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <div >
        <Link className='m-1' to='/' >Accueille</Link>
        <Link to='/About' >A propos</Link>
    </div>
  )
}

export default Navigation