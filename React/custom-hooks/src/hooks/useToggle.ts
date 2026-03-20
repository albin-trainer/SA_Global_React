import { useEffect, useState } from "react";

export function useToggle(){
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
 return {val,toggleButton}
}