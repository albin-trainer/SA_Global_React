import Employee from "./Employee";
import FilterEmployee from "./FilterEmployee";
import { useEmployees } from "../hooks/useEmployees";
import { usefilterEmps } from "../hooks/useFilterEmps";
function EmployeeList(){
  let {emps,removeEmp}=useEmployees();  
  let {filterEmps,filtering}=usefilterEmps(emps);
    
    return <div>
      <br/>
           Search  
             <FilterEmployee filter={filtering}  />
           <div>
         {
        filterEmps.map( e => <Employee  key={e.eid} {...e} delEvent={removeEmp} /> )
      } 
      </div>
    </div>
}
export default EmployeeList;