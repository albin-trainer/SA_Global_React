//fetching the emps data
//deleting the emp data

import { useEffect, useState } from "react";
import { getAllEmps } from "../services/EmployeeService";
import type { Employee } from "../pages/employee/EmployeeList";
import { useQuery } from "@tanstack/react-query";

export function  useEmployees(){
/*
useEffect( ()=>{
       getAllEmps().then( emps=>setEmps(emps));
},[] );
*/
 const {data : emps=[] }= useQuery<Employee[]>({
   queryKey:['employees'],
   queryFn:getAllEmps,staleTime:10000
})
const removeEmp=(id:number)=>{
  // setEmps(emps.filter(emp => emp.id !== id)); 
}
return {emps,removeEmp};
}