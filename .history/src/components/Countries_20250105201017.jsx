import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Countries = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetch
        try
         axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital')
    },[])
   
  return (
    <div>
        
       <h1>Countries</h1> 
       <div className='  flex justify-center items-center'> 
 <div className='w-4/6 h-8 bg-blue-800 rounded-full'>
 <input type="range" min="0" max="250" step="0" value='0' className=' bg-white m-1 overflow-hidden cursor-pointer  accent-cyan-500' />
 </div>
 </div>



    </div>
  )
}

export default Countries