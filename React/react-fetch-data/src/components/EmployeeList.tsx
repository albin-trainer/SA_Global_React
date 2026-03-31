import { useEffect, useState } from "react"
import SimpleCrudTest from "./SimpleCrudTest";
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
       const timer=    setTimeout(connectApi,100); //DeBouncing..... 

     /*   function connectApi(){
          let url=`http://localhost:3001/employees?name_like=^${search}`;
            fetch( url ).
            then(res=>res.json()).  //resp.json() returns another Promisse
            //Func of promise returned by res.json()
            then((emps:Employee[])=>setEmployees(emps));
        }  */
    async function connectApi() {
        let url=`http://localhost:3001/employees?name_like=^${search}`;
        const res= await fetch(url);
        const emps:Employee[]= await res.json();
        setEmployees(emps)
    }

     ()=>clearTimeout(timer); //clear the timer for old request ....
    },[search]);

        /*
useEffect(() => {
    const controller = new AbortController();

    async function fetchEmployees() {
        try {
            const res = await fetch(url, { signal: controller.signal });
            const emps: Employee[] = await res.json();
            setEmployees(emps);
        } catch (err: any) {
            if (err.name !== "AbortError") {
                console.error("Error:", err);
            }
        }
    }

    fetchEmployees();

    return () => controller.abort(); 
}, []);
        */
    return <>
      <SimpleCrudTest/>
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