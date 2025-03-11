import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Countries = () => {
    const continent = ["Amerique ",Asie ,Europe , Afrique,Oceanie];
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchContries = async ()=> {

       
        try{
         
            const response =await axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital') 
            setData(response.data)
 
        }catch(error){
        
        console.error("erreur de l'api",error)
        
        

        }
                    console.log(data)
         // 
         }
         fetchContries()
    },[])
   
  return (
    <div>
        
       <h1>Countries</h1> 
       <div className='  flex justify-center items-center'> 
 <div className='w-4/6 h-8 bg-blue-800 rounded-full'>
 <input type="range" min="0" max="250" step="0" value='0' className=' bg-white m-1 overflow-hidden cursor-pointer  accent-cyan-500' />
 {continent.map((count,index)=>(
    <input key={index} type="radio" value={count} />
 ))}
 </div>

 <ul>
    {data.map((country,index)=>(
         <li key={index}>{country.name}</li>  
    ))}
 </ul>
 </div>



    </div>
  )
}

export default Countries