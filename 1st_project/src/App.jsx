import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
   const [a, seta] = useState(0)
    const [b, setb] = useState(0)
    function aChanging(){
      console.log("A is changed")
    }
    function bchanging(){
      console.log("b is changed")
    }
    useEffect(function(){
      aChanging()
    }[a])

    useEffect(function(){
      bchanging()
    }[b])
  return (
    <div>
      <button onClick={() => {
        seta(a+1)
      }}> change A</button>

      <button onClick={() =>{
        setb(b+1)
      }}> Chnage B </button>
      
    </div>
  )
}

export default App
