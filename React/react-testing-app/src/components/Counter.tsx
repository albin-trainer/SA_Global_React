import { useRef, useState } from "react";
export function Counter(){
let [count,setCount]=useState<number>(0);
let [msg,setMsg]=useState<string>("");
let nameRef=useRef("")
 return <>
 <h1>Counter Demo</h1>
    <h1>{count}</h1>
    {
        // this is short cut
   /* <button onClick={()=>setCount(count+1)}>Increment</button>
*/ 
<button 
onClick={()=>setCount(prev=>prev+1)}>Increment</button>
}

<input type="text" ref={nameRef} 
placeholder="Enter Name"></input>
<button onClick={()=>setMsg("Hello "+nameRef.current.value)}>Enter</button>
<p>{msg}</p>
 </>

}