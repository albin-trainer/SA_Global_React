/*
//will work, but not recommended
function Child(){

}

*/
//use arrow Func

import React from "react";
//just needs to wrap the child 
//component into React.memo
const Child= React.memo( ()=>{
    console.log("**Child rendered**")
    return <>
        <h1>Child Component</h1>
    </>
})
export default Child;