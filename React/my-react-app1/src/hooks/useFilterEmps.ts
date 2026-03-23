import { useEffect, useState } from "react";
import type { Employee } from "../types/Employee";

export function usefilterEmps(emps:Employee[]){

let [filterEmps,setFilterEmps]=useState<Employee[]>(emps);
useEffect( ()=>{
  setFilterEmps(emps);
  localStorage.setItem("emps",JSON.stringify(emps));
     return ()=>console.log("cleaning up ...")
},[emps] );

  let  filtering=(searchText:string)=>{
      searchText=searchText.toLowerCase();
     var result= emps.filter(e => e.ename.toLowerCase().includes(searchText) ||
          e.skills.toLowerCase().includes(searchText)  ||
          e.desg.toLowerCase().includes(searchText) 
    );
     console.log(result);
     setFilterEmps(result);

}
return  {filterEmps,filtering}
}