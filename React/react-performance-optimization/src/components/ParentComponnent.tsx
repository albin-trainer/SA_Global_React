import { useCallback, useMemo, useState } from "react";
import Child from "./Child1";
import Child2 from "./Child2";
interface Emp{
    id:string; 
    name:string;
}
const ParentComponent =()=>{
    console.log("parent rendered ....")
    //Array of Emps
    //filter the emps based on the name
    let[emps,setEmps]=useState <Emp[]> ( [ {id:"1",name:"Sanjay"},
         {id:"2",name:"Raj"},
         {id:"3",name:"Keerthana"},
         {id:"4",name:"Abhilash"} ] );
    let [search,setSearch]=useState<string>("Raj");
    let [count,setCount]=useState<number>(0);
        //caching the values
    let filteredData:Emp[]=  useMemo( ()=>{
        //calling service
         emps.filter(e=> {  
            console.log("filtering");
        return  e.name.includes(search) })},[search] );

       // console.log( ` Filtered data : ${filteredData[0].name}`)
 console.log("parent rerendered")

 const sayHello= useCallback( (name:string)=>{
    console.log(`Hi ${name} Good Moning`);

 },[])
    return <>
     <h1>{count}</h1>
     <button onClick={()=>setCount(prev=>prev+1)}>INCREMENT</button>
     <Child/>
     <Child2 sayHello={sayHello}/>
    </>
}
export default ParentComponent;