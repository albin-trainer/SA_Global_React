//fetching the emps data
//deleting the emp data

import { useEffect, useState } from "react";
import { getAllEmps } from "../services/EmployeeService";
import type { Employee } from "../pages/employee/EmployeeList";

export function  useEmployees(){
const [emps,setEmps]=useState<Employee[]>([])

useEffect( ()=>{
       getAllEmps().then( emps=>setEmps(emps));
},[] );

const removeEmp=(id:number)=>{
   setEmps(emps.filter(emp => emp.id !== id)); 
}

return {emps,removeEmp};
}