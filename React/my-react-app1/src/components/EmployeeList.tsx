import Employee from "./Employee";
import type {Employee as EmpType } from '../types/Employee'
import { useEffect, useState } from "react";
import FilterEmployee from "./FilterEmployee";
function EmployeeList(){
     /* let emps:EmpType[]=[{
    eid:"101",ename:"Sanjay",gender:"male",desg:"Ass. Engg",skills:"React"
  },{  eid:"102",ename:"Rekha",gender:"female",desg:"Ass. Engg",skills:"Angular"},
  {  eid:"103",ename:"Arun",gender:"male",desg:"Engg",skills:"Python"},
  {  eid:"104",ename:"Priya",gender:"female",desg:"Sr.Engg",skills:".NET"},
  {  eid:"105",ename:"Rohit",gender:"male",desg:"Jr.Engg",skills:"AI"},
  {  eid:"106",ename:"Neha",gender:"female",desg:"Jr.Engg",skills:"AI"},
];*/
let [emps,setEmps]=  useState<EmpType[]>([]);
let [filterEmps,setFilterEmps]=useState<EmpType[]>([]);
let [data,setData]=  useState(10);
let removeEmp=(id:string)=>{
   setEmps(prev=>prev.filter(e=>e.eid!=id))
    console.log(emps);
}
let [val,setVal]=useState<number>(99);
useEffect( ()=>{
  //console.log("modified Rendered....");
  setFilterEmps(emps);
  localStorage.setItem("emps",JSON.stringify(emps));
     return ()=>console.log("cleaning up ...")
},[emps,val] );
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

  function filtering(searchText:string){
     // console.log("in parent "+searchText)     
      searchText=searchText.toLowerCase();
     var result= emps.filter(e => e.ename.toLowerCase().includes(searchText) ||
          e.skills.toLowerCase().includes(searchText)  ||
          e.desg.toLowerCase().includes(searchText) 
    );
     console.log(result);
     setFilterEmps(result);
    }
    return <div>
      <br/>
           Search  
             <FilterEmployee filter={filtering}  />
           <div>
         {
          /*
        emps.map( e => <Employee  key={e.eid}
          
            eid={e.eid}  gender={e.gender} ename={e.ename} desg={e.desg} skills={e.skills} 
            delEvent={removeEmp} /> )
            */
             filterEmps.map( e => <Employee  key={e.eid} {...e} delEvent={removeEmp} /> )
      } 
      </div>
    </div>
}
export default EmployeeList;