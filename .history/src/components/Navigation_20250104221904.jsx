import React from 'react'
import { Link,usl } from 'react-router-dom'


const Navigation = () => {
  return (
    <div >
        <Link className='m-1' to='/' >Accueille</Link>
        <Link to='/About' >A propos</Link>
    </div>
  )
}

export default Navigation