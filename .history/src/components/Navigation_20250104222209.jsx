import React from 'react'
import { Link,useLocation } from 'react-router-dom'


const Navigation = () => {
    const location = useLocation();
    const isActive = (patch)  location.pathname === patch
  return (
    <div >
        <Link className='m-1' to='/' >Accueille</Link>
        <Link to='/About' >A propos</Link>
    </div>
  )
}

export default Navigation