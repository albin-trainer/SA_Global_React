import { useRef } from "react";

function FilterEmployee(){
 const inputRef=useRef <HTMLInputElement>(null);
 let inpChange=()=>{
    console.log(inputRef.current?.value)
 }

    return<>
        <input ref={inputRef} type="text" onKeyUp={inpChange}
         placeholder="By Name/skill/desig">
        </input>
    </>
}

export default FilterEmployee;