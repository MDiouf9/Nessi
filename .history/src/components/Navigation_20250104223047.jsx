import React from 'react'
import { Link,useLocation } from 'react-router-dom'


const Navigation = () => {
    const location = useLocation();
    const isActive = (patch) => location.pathname === patch
  return (
    <div >
        <Link to='/' 
        className={`m-1 pb-2${ 
            isActive('/') ? 'border-b-2 border-blue-400 text-blue-400'
        : 'text-white hover:bg-gray-400'       }`}
        >Accueille</Link>

        <Link to='/About'className={`m-1 pb-2${ 
            isActive('/') ? 'border-b-2 border-blue-400 text-blue-400'
        : 'text-white hover:bg-gray-400'       }`} >A propos</Link>
    </div>
  )
}

export default Navigation