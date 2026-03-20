import { useState } from "react";

export function useCounter() :[number,incr:()=>void,decr:()=>void]  {
  let [c,setC]=useState<number>(0);
  const incr=()=>{
    setC(prev=>prev+1);
  }
  const decr=()=>{
    setC(prev=>prev-1);
  }
  return [c,incr,decr];
}