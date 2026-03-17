import Employee from "./Employee";
import type {Employee as EmpType } from '../types/Employee'
function EmployeeList(){
      const emps:EmpType[]=[{
    eid:"101",ename:"Sanjay",gender:"male",desg:"Ass. Engg",skills:"React"
  },{  eid:"102",ename:"Rekha",gender:"female",desg:"Ass. Engg",skills:"Angular"},
  {  eid:"103",ename:"Arun",gender:"male",desg:"Engg",skills:"Python"},
  {  eid:"104",ename:"Priya",gender:"female",desg:"Sr.Engg",skills:".NET"},
  {  eid:"105",ename:"Rohit",gender:"male",desg:"Jr.Engg",skills:"AI"},
  {  eid:"106",ename:"Neha",gender:"female",desg:"Jr.Engg",skills:"AI"},
];
let removeEmp=(id:string)=>{
   alert(`in parent ${id}`);
   //use filter to remove
   //print the new array in console..
}

    return <div>
         {
        emps.map( e => <Employee 
            eid={e.eid}  gender={e.gender} ename={e.ename} desg={e.desg} skills={e.skills} 
            delEvent={removeEmp} /> )
      } 
    </div>
}
export default EmployeeList;