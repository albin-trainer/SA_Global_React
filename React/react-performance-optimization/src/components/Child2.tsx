import React from "react";

type ChildProps={
    sayHello:(name:string)=>void
}

const Child2= React.memo( (props:ChildProps)=>{
    console.log("Child 2 rendered")
    props.sayHello("Albin");
return <>
    <h1>Child2</h1>
</>
})

export default Child2;