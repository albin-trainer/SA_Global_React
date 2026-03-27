
import { useState } from 'react';
import './App.css'
import ParentComponent from './components/ParentComponnent';
function App() {
  let msg="Good Morning";
  let [wish,setWish]=useState<string>("Have a nice Day");
  const changeHeading=()=>{
    //js style //returns the node //// Accessing the DOM directly
    let headingElement= document.getElementById("myheading") ;
    if(headingElement) {
         headingElement.innerHTML="Hv a nice day !!!"
    }
  }
  return (   <>
        My App
        <h1 id="myheading">{msg}</h1>
        <h1>{wish}</h1>
        <button onClick={changeHeading}>Change the MSG JS style</button>
        <button onClick={()=>setWish("Hv a wonderful day!!!")}>Change the MSG React Style</button>
        <ParentComponent/>
    </>
  )
}

export default App
