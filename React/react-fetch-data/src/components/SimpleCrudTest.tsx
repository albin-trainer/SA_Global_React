import { addNewEmp } from "../service/EmployeeService";

function SimpleCrudTest(){
      const addemp= ()=>{
const emp= {"id": 51,name: "Ganapathy",
    age: 32,
    email: "ganapathy@gmail.com",
    dept: "Finance",
    gender: "Male"
      }
      addNewEmp(emp).then(res=>console.log("Added"));
    }
    return <>
        <button onClick={addemp}> Test Add New Emp</button> 
       <button>Test Del Emp</button> 
       <button>Test update Emp</button> 
        <button>Test get by id</button> 
    </>
}
export default SimpleCrudTest;