import { useEffect, useState } from "react"
const departments = ["HR", "IT", "Finance"] as const;

type Department = typeof departments[number] | "";
type Gender = "Male" | "Female" | "Other" | "";

export type Employee = {
  name: string;
  age: number;
  email: string;
  dept: Department;
  gender: Gender;
};
export const EmployeeList=()=>{
    let [employees,setEmployees]=useState<Employee[]>([]);
    let [search,setSearch]=useState<string>("");
    let [debouncingSearch,setDebouncingSearch]=useState<string>("");
    let url="http://localhost:3001/employees"
    let abortController:AbortController;
    useEffect( ()=>{
      if(abortController)
           abortController.abort();//cancelling the prev req
        //used to connect with the BACK-END
        //can u predict when will get the resp?
        //sends Asynchronous req, assume its takes 500ms to get the res
        //res.json() returns one more promise
        abortController= new AbortController();
        fetch(url,{signal:abortController.signal}).
        then((res)=> res.json()  ).
        then((emps:Employee[] )=>setEmployees(emps));
        ()=>{ return abortController.abort()} //will gets called when the components gets unmounted
    },[] );
    useEffect(()=>{
        console.log("searching")
            setTimeout(connectApi,500);
            
        function connectApi(){
          let url=`http://localhost:3001/employees?name_like=^${search}`;
            fetch( url ).then(res=>res.json()).
            then((emps:Employee[])=>setEmployees(emps));
        }

    },[search]);
    return <>
        Emp List
        <input type="text" placeholder="Search by Name" 
        onChange={(e)=>setSearch(e.target.value)}></input>
        <table border="1">
            <tr>
               
                 <th> Emp name</th>
                  <th>Age</th>
                  <th>Gender</th>
                   <th>Dept</th> 
                   <th>Email</th>
             </tr>
             {
             employees.map( e => <tr>  
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.gender}</td>
                    <td>{e.dept}</td>
                    <td>{e.email}</td>

             </tr> )
             }
        </table>
    </>
}