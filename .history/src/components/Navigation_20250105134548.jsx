import React from 'react'
import { Link,useLocation } from 'react-router-dom'


const Navigation = () => {
    const location = useLocation();
    const isActive = (patch) => location.pathname === patch
  return (
    <div >
        l
        <Link to='/' 
        className={`m-1 border-b-2${ 
            isActive('/') ? ' border-blue-500 text-blue-500'
        : 'border-transparent text-black hover:border-gray-50'       }`}
        >Accueille</Link>

        <Link to='/About'className={`m-1 border-b-2${ 
            isActive('/About')
             ? ' border-blue-500 text-blue-500'
             : 'text-gray-700'       }`} >A propos</Link>
    </div>
  )
}

export default Navigation