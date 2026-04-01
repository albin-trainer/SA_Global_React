import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addNewEmp, getEmpById, updateEmp } from "../../services/EmployeeService";



const departments = ["HR", "IT", "Finance"] as const;
type Department = typeof departments[number] | "";

type Gender = "Male" | "Female" | "Other" | "";

export type EmployeeFormData = {
  name: string;
  age: number;
  email: string;
  dept: Department;
  gender: Gender;
};

// Props (for edit support)
type Props = {
  defaultValues?: Partial<EmployeeFormData>;

};

function EmployeeForm({ defaultValues }: Props) {
  let navigate=useNavigate();
  const {
    register, handleSubmit, control, reset, formState: { errors }
  } = useForm<EmployeeFormData>({
    defaultValues: {
      name: defaultValues?.name ?? "",
      age: defaultValues?.age ?? 0,
      email: defaultValues?.email ?? "",
      dept: defaultValues?.dept ?? "",
      gender: defaultValues?.gender ?? ""
    }
  });
   //returns all the params
   //Obj Destructuring ....
   let {id}=   useParams();
  useEffect (  ()=>{
      console.log("Comp mounted")
      console.log(id);

      if(id){
          //for edit
    getEmpById(Number(id))
    .then(emp=> {
      console.log(emp)
      reset(emp); //to update the hook form
    }); 
      }
      else{
        //for new
      }

  },[]);

 const onSubmit= (data: EmployeeFormData) =>
  {
      console.log(data);
      if(id){
        //call update service
       
          updateEmp(data, Number(id)).then(resp=>{
            navigate("/employee");
          }).catch(err=>console.log(err));

      }
      else{
        //call new emp service
       addNewEmp(data).then(resp=>alert("new Emp added"));
      }
  } 


  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 500, mx: "auto" }}
    >
      <Typography variant="h5" mb={2}>
        Employee Form
      </Typography>

      {/* Name */}
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      {/* Age */}
      <TextField
        fullWidth
        type="number"
        label="Age"
        margin="normal"
        {...register("age", {
          required: "Age is required",
          min: { value: 18, message: "Must be 18+" }
        })}
        error={!!errors.age}
        helperText={errors.age?.message}
      />

      {/* Email */}
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        {...register("email", {
          required: "Email is required"
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      {/* Department (Select) */}
      <Controller
        name="dept"
        control={control}
        rules={{ required: "Department is required" }}
        render={({ field }) => (
          <TextField
            select
            fullWidth
            label="Department"
            margin="normal"
            {...field}
            error={!!errors.dept}
            helperText={errors.dept?.message}
          >
            <MenuItem value="">Select Department</MenuItem>
            {departments.map((d) => (
              <MenuItem key={d} value={d}>
                {d}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      {/* Gender (Radio) */}
      <Controller
        name="gender"
        control={control}
        rules={{ required: "Gender is required" }}
        render={({ field }) => (
          <FormControl margin="normal" error={!!errors.gender}>
            <FormLabel>Gender</FormLabel>

            <RadioGroup row {...field}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>

            <Typography color="error" variant="body2">
              {errors.gender?.message}
            </Typography>
          </FormControl>
        )}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Save
      </Button>
    </Box>
  );
}

export default EmployeeForm;