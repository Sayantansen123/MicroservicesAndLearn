import React, { useEffect, useState } from 'react'

const UseStateEx = () => {
  const [count,setCount] = useState(0);
  const [tap,setTap] = useState("");

  //tapping the button triggers the useeffect
  useEffect(()=>{
    setTap(`button tapped ${count} times`)
    console.log("button tapped")
  },[count])


  return (
    <div className='flex w-screen flex-col items-center gap-2'>
      <span>{count}</span>
      <span>{tap}</span>
      <button onClick={() => setCount(count + 1)}> ++++</button>    
    </div>
  )
}

export default UseStateEx
