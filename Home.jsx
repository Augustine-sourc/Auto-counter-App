import { useState,useEffect } from "react";

export const Home = ()=>{
  const [count,setCount] = useState(0)
  const [running,setRunning] = useState(true)

  useEffect(()=>{
    console.log("UseEffect at work")
    if(running){
      return
    }

    const interval = setInterval(()=>{
      setCount((prev)=>prev + 1)
    },1000)

    return()=>clearInterval(interval)
  }, [running])


  return(
    <div>
      <h1>Auto Counter</h1>
      <button onClick={()=> setRunning((prev)=> !prev)}>Start/Stop</button>
      <h1>{count}</h1>
    </div>
  )
}
