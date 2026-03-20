import { useEffect, useState } from 'react'
import './App.css'
import { useToggle } from './hooks/useToggle'
import { useCounter } from './hooks/Counter';

function App() {
  /*
  let [val,setVal]=useState<string>("ON");
  const toggleButton=()=>{
    val=="ON"?setVal("OFF") : setVal("ON")
  }
  useEffect( ()=>{
      if(val=="ON")
        document.body.className="LightTheme";
      else
        document.body.className="DarkTheme";
  },[val] );
  */
 let {val,toggleButton}=  useToggle();
 let [c,incr,decr]=useCounter();
 //First try without hooks, then u can try hooks
  return (
    <>
      <h1>Toggle</h1>
      <h2>{val}</h2>
      <button onClick={toggleButton}> {val} </button>
      <h2>{c}</h2>
      <button onClick={incr}>Increment</button>
      <button onClick={decr} >Decrement</button>
    </>
  )
}

export default App
