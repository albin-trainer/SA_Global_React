import type { Employee } from '../types/Employee';
import './Employee.css'
function Employee(empProps){
    //console.log(empProps.gender)
    let maleImg="images/male.jfif";
    let femaleImg="images/female.jpg";
    let rmEmp=(id:string)=>{
        alert(`in child ${id}`)
        empProps.delEvent(id);
    }
    return <div className="emp">
        <div className="card">
            { /*  conditional rendering  */}
            {
                /*  Lets say some menus display for Admin user */
            }
        {
        /*empProps.gender=="female" && <img src="images/female.jpg" height="250px" className="card-img-top" alt="..."/> */}
        {
        /*empProps.gender=="male" &&  <img src="images/male.jfif" height="250px" className="card-img-top" alt="..."/>
        */}
     <img src={empProps.gender=="male"?maleImg:femaleImg}  height="250px" />
  <div className="card-body">
<i className="fa-solid fa-trash genderIcon" onClick={()=>rmEmp(empProps.eid)}></i>
    <h5 className="card-title">{empProps.ename}</h5>
    <p className="card-text">{empProps.desg}</p>
    <p className="card-text">{empProps.skills}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
}
export default Employee;``