import { Label } from "@mui/icons-material";
import { Box, Button, InputLabel, TextField } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";

export type Skill = {
  skillName: string;
  experience: number;
};

export type FormData = {
  name: string;
  age: number;
  email: string;
  skills: Skill[];
};

function DynamicFields(){
  const { register, control, handleSubmit,formState: { errors },trigger } = useForm<FormData>({
  });

  const { fields, append, remove} = useFieldArray({ control, name: "skills",
  });

  const submitForm = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Submitted");
  };

    return <>
      <div>
      <h3>Employee Form</h3>
      <form onSubmit={handleSubmit(submitForm)}>      
        <Box
          display="grid"
          gridTemplateColumns={{
              xs: '1fr',                // mobile
            md: '150px 150px 150px 150px 150px 150px 150px 1fr',    // desktop: label + input + button
          }}
          gap={2} ml={4}
        >
        <div>
          <InputLabel >Name:</InputLabel>
          <TextField   {...register("name")} />
        </div>
        <div>
          <InputLabel >Age:</InputLabel>
          <TextField     type="number" {...register("age", { valueAsNumber: true })}
          />
        </div>
        <div>
          <InputLabel  >Email:</InputLabel>
          <TextField {...register("email")} />
        </div>

        {fields.map((field, index) => (
          <div className="skill" key={field.id} style={{ marginBottom: "10px" }}>
            <TextField  placeholder="Skill Name" 
              {...register(`skills.${index}.skillName`
            ,{required:"Must enter skill"} )}
            />
            <p>{errors.skills?.[index]?.skillName?.message}</p>
         <TextField  type="number"  size="small"
              placeholder="Experience"
              {...register(`skills.${index}.experience`, {
                valueAsNumber: true,required: "Experience is required",
                min:{value:1,message:"Min val shud be 1"},max:{value:15,message:"Max 15 is Allowed"}

              }
            )              
            }
            />
                          <p>{errors.skills?.[index]?.experience?.message}</p>

            <Button type="button" onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
        ))}
        {
            /*
<Button   size="small" sx={{ width: '120px',height:'50px' }} 
 type="button" variant="contained" onClick={ ()=>{ append({ skillName: "", experience: 1 }) }}>
  + Add Skill
</Button>
*/
}
<Button
  type="button" variant="contained" size="small" sx={{ width: '120px',height:'50px' }} // fixed width
  onClick={async () => {
        const index = fields.length - 1;

    const isValid = await trigger([
      `skills.${index}.skillName`,
      `skills.${index}.experience`,
    ]);

    if (isValid) {
      append({ skillName: "", experience: 1 });
    }
  }}
>
  + Add Skill
</Button>
        <br /><br/>

        <Button type="submit"   size="small" sx={{ width: '120px',height:'50px' }} variant="contained" >Submit</Button>
        </Box>
      </form>
    </div>
    </>
}

export default DynamicFields;