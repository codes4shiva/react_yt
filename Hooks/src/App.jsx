import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(20)

      function inc(){
       setnum(prev=> (prev+1))
         setnum(prev=> (prev+1))
      }
     
      function dec(){
      setnum(num-1)
       setnum(num-1)
        setnum(num-1)
      }
  return (
    <div>
      <h1 id='hello'>{num}</h1>
      <button onClick={inc}>increase</button>
      <button onClick={dec}>decrease</button>
    </div>
  )
}

export default App
