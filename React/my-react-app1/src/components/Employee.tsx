import type { Employee } from '../types/Employee';
import './Employee.css'
function Employee(empProps:Employee){
    return <div className="emp">
        <h2>{empProps.eid}</h2>
        <h2>{empProps.ename}</h2>
        <h2>{empProps.desg}</h2>
        <h2>{empProps.skills}</h2>
    </div>
}
export default Employee;