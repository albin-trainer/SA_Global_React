import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmpForm() {
  const navigate = useNavigate();
 let [msg,setMsg]=useState("");
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/success"); 
  // setMsg("Registration Success")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login Page</h1>
      <Box display="flex" flexDirection="column" gap={2} width={300}>
        
        {/* Name */}
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              placeholder="Name"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        {/* Age */}
        <Controller
          name="age"
          control={control}
          rules={{
            required: "Age is required",
            min: { value: 18, message: "Age must be >= 18" }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              placeholder="Age"

              label="Age"
              error={!!errors.age}
              helperText={errors.age?.message}
            />
          )}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
      <p>{msg}</p>
    </form>
  );
}