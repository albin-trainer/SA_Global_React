import { useForm } from "react-hook-form";
import { empSchema, type EmpData } from "../schemas/emp.schema";

import { zodResolver } from "@hookform/resolvers/zod";
/*type FormData={
    name:string; age:number;
}*/
function HookWithZod(){
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<EmpData>(
        {resolver: zodResolver(empSchema)}
      );

    const onSubmit=(data:EmpData)=>{
        console.log("Submited : "+data)
    }
    return <>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name") } placeholder="Enter Name"></input>
            <p>{errors.name?.message}</p>
            <input type="number" {...register("age",{valueAsNumber:true})} placeholder="Enter Age"></input>
               <p>{errors.age?.message}</p>
            <button type="submit">Enter</button>
        </form>
    </>
    
}

export default HookWithZod;