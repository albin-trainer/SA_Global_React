
import './App.css'
import Employee from './components/Employee'
import type { Employee as EmpType } from './types/Employee'

function App() {
  let emps:EmpType[]= [ {
    eid:"101",ename:"Sanjay",desg:"Ass. Engg",skills:"React"
  },{  eid:"102",ename:"Karthik",desg:"Ass. Engg",skills:"Angular"},
  {  eid:"103",ename:"Arun",desg:"Engg",skills:"Python"},
  {  eid:"104",ename:"Raj",desg:"Sr.Engg",skills:".NET"},
  {  eid:"105",ename:"Rohit",desg:"Jr.Engg",skills:"AI"}
]
  return (
    <>
     Hello 
     <Employee eid="101" ename="Raj" desg="Manager" skills="React, Angular"/>
      <Employee eid="102" ename="Sanjay" desg="Sw Eng" skills="Java, Python"/>
      {
        emps.map( e => <Employee eid={e.eid} ename={e.ename} desg={e.desg} skills={e.skills} /> )
      }
    </>
  )
}

export default App
