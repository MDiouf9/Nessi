import React from 'react'

const Countries = () => {
  return (
    <div>
        
       <h1>Countries</h1> 
       <div className='  flex justify-center items-center'> 
 <div className='w-4/6 h-8 bg-blue-800 rounded-full'>
 <input type="range" min="0" max="250" step="0" value='0' className='h-2 bg-white m-1 overflow-hidden cursor-pointer  accent-cyan-500' />
 
 
 </div>


       </div>



    </div>
  )
}

export default Countries