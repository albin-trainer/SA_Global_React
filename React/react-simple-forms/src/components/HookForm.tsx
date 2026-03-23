import { useForm } from "react-hook-form";
import { required } from "zod/v4-mini";
type FormData={
    name:string; age:number;
}
function HookForm(){
    //object de-structuring....
        const {register,handleSubmit,formState:{errors}}=  useForm <FormData> ();

        const submitForm=()=>{    
            //called automatically once the validation done .....
            //now i can connect with the BACK-END....
         }
        
    return <>
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="text" placeholder="Enter Name" 
             {...register("name",{required:"Name is required"})} ></input>
            <br></br> <p>{errors.name?.message}</p>
            <input type="number" placeholder="Enter Age" 
            {...register("age",{valueAsNumber:true,min:{value:18,message:"Age must be >=18 "}})}
            ></input>
            <br></br> <p>{errors.age?.message}</p>
            <button>Submit</button>
        </form>
    </>
}

export default HookForm;