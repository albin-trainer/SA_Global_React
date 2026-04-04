import { act, renderHook, waitFor } from "@testing-library/react";
import { useEmployees } from "../../hooks/useEmployees";
import { getAllEmps } from "../../services/EmployeeService"
//Replace EmployeeService module with the mock version
vi.mock("../../services/EmployeeService")
describe("Test use Empls Hook",  ()=>{

test("Testing use Employees Hook ", async()=>{
    const mockEmpData= [
        {id:101,name:"Sanjay", gender:"Male"},
        {id:102,name:"KArthik", gender:"Male"},
        {id:103,name:"Priya", gender:"Female"},
        {id:104,name:"Sneha", gender:"Female"},
        {id:105,name:"Ganapathy", gender:"Male"},
    ];
    //When getAllEmps () get called
    //shud return the mock data
     (getAllEmps as any).mockResolvedValue(mockEmpData);
       
     //renderHook() -> to run the hook
     //result contains the value returned by the hook
      const {result} = renderHook(()=>useEmployees())

      //result wont get immediatly 
      //after running the useEffect hook
      //wait for useEffect to complete the run

    await waitFor ( ()=>{ 
         expect(result.current.emps.length).toBe(5);
    })
    //this Stmt change the state of the Hook
     act( ()=>{
      result.current.removeEmp(101);
    });
    expect(result.current.emps.length).toBe(4);
      //is the Func to assert the result
})

})
