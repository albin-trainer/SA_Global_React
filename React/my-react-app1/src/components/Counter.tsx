import { useState } from "react";

function Counter(){
    //let count=0;
    //without generics
   // let [count,setCount] = useState(100); //react JS
    let [count,setCount] = useState<number>(100); //react TS
     let doCount=()=>{
      //  count++;
      setCount(prev=>prev+1)
        console.log(count)
     }
    return <div>
        <h2>{count}</h2>
        <button onClick={doCount} >Click ME</button>
    </div>
}
export default Counter;