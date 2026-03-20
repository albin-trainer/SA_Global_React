import { useRef } from "react";
type filterProps={
    filter:   (n:string)=>void
}
function FilterEmployee(filter:filterProps){
 const inputRef=useRef <HTMLInputElement>(null);
 let inpChange=()=>{
    console.log(inputRef.current?.value)
    filter.filter(inputRef.current?.value)
 }

    return<>
        <input ref={inputRef} type="text" onKeyUp={inpChange}
         placeholder="By Name/skill/desig">
        </input>
    </>
}

export default FilterEmployee;