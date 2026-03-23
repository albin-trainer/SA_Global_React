import { useState } from "react";

function SimpleForm(){
    let [userForm,setUserForm]= useState<{name:string,age:number}>({name:"",age:0});
    let [errors,setErrors]=useState<{ename:string,age:string}>({ename:"",age:""});
    const nameHandler= (e)=>{ //event object
        console.log(e.target.value)
        setUserForm({...userForm,name:e.target.value}) //returns old copy + new value of name
    }
    const ageHandler=(e)=>{
        console.log(e.target.value);
        setUserForm({...userForm,age:e.target.value})
    }
    const handleSubmit= (e)=>{
            e.preventDefault();//stops reloads the page (Submit usually reloads the page)
           if(!validation()) {console.log("Validation success. calling api to persist form")}
           else {console.log("validation failed ")}
            console.log(userForm)
    }
     const validation =()=>{
        let isError=false;
        let v:{ename:string,age:string}={ename:"",age:""};
         if(userForm.name=="") {  
           //  setErrors({...errors,ename:"Please Enter Name"});  //womt update immediatly, ita async
         v.ename="plz enter name";
              isError=true;
        }
        if(userForm.age<18)  {
           //  setErrors({...errors,age:"Please Enter proper age"});//async call
           //does batch update .....
           v.age="Plz enter age more than 18"
            isError=true;
        }
       setErrors(v);
        return isError;
    }
    return <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" onChange={nameHandler}></input>
        <br></br> <p>{errors.ename}</p>
        <input type="number" placeholder="Enter Age" onChange={ageHandler}></input>
        <br></br> <p>{errors.age}</p>
        <button>Submit</button>
        </form>
    </>
}

export default SimpleForm;