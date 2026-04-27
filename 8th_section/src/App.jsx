import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(3)
  const getdata = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setuserdata(response.data)
    console.log(response.data)
  }
  useEffect(function(){
    getdata()
  },[index])

  let printuserdata = <h1 className='text-gray-300 text-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> Loading...</h1>
  if(userdata.length>0){
    printuserdata = userdata.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url}>
          <div className=''>
             <img className='h-40 w-40 rounded-xl  ' src={elem.download_url} alt=""/>
        <h className="font-semibold  py-1 px-2 " > {elem.author}</h>
          </div>
       
        </a>
      </div>
    })
  }
  return (
    <div className='h-screen flex flex-col'>
   
    <div className='flex h-4/5 flex-wrap gap-4 p-2 '>{printuserdata}</div>
    <div className=' flex justify-center items-center gap-4 p-4 '>
       <button 
       className='bg-amber-400 text-sm font-semibold text-black px-4 py-2 rounded active:scale-95 '
       style = {{opacity : index==1? 0.5 : 1}}
       onClick={() =>{
        if(index>1)
        setindex(index-1)
      setuserdata([])
       }}> Prev </button>
       <h3 className='text-gray-300 '> Page {index} </h3>
    <button className='bg-amber-400 text-sm font-semibold text-black px-4 py-2 rounded active:scale-95 ' 
    onClick={() =>{
      setindex(index+1)
       setuserdata([])
    }}> Next </button>
    </div>
    
    </div>
  )
}

export default App
