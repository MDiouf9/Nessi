import React from 'react'
import { Link,useLocation } from 'react-router-dom'


const Navigation = () => {
    const location = useLocation();
    const isActive = (patch) => location.pathname === patch
  return (
    <div >
        <Link to='/' 
        className={`m-1 pb-2${ 
            isActive('/') ? 'border-b-2 border-indigo-500 text-indigo-500'
        : 'border'       }`}
        >Accueille</Link>

        <Link to='/About'className={`m-1 pb-2${ 
            isActive('/about') ? 'border-b-2 border-indigo-500 text-indigo-500'
        : 'text-gray-700 hover:border-b-2 hover:border-gray-300'       }`} >A propos</Link>
    </div>
  )
}

export default Navigation