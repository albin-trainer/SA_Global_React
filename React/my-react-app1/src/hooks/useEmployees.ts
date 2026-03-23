import { useEffect, useState } from "react";
import type {Employee as EmpType } from '../types/Employee'

export function useEmployees(){

    //create state
    //load initial data
    //create the remove Func
  //return {data,remFunc}
let [emps,setEmps]=  useState<EmpType[]>([]);
useEffect( ()=>{ //Fetch from the BACK END ....
    setEmps([{
    eid:"101",ename:"Sanjay",gender:"male",desg:"Ass. Engg",skills:"React"
  },{  eid:"102",ename:"Rekha",gender:"female",desg:"Ass. Engg",skills:"Angular"},
  {  eid:"103",ename:"Arun",gender:"male",desg:"Engg",skills:"Python"},
  {  eid:"104",ename:"Priya",gender:"female",desg:"Sr.Engg",skills:".NET"},
  {  eid:"105",ename:"Rohit",gender:"male",desg:"Jr.Engg",skills:"AI"},
  {  eid:"106",ename:"Neha",gender:"female",desg:"Jr.Engg",skills:"AI"},]);
  ///immediatly the emps data wont change .... it has to reconcilation in background ....
  //setFilterEmps(emps); //here the emps might not updated ....
  console.log("Component RENDERED .....");
  return ()=>{ /* for cleanup */ }
  }, []) //invoke only once....
  
let removeEmp=(id:string)=>{
   setEmps(prev=>prev.filter(e=>e.eid!=id))
    console.log(emps);
}
  
    return {emps,removeEmp}

}