import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import EmpForm from "./EmpForm"
import userEvent from "@testing-library/user-event"

test("Basic Form Validation", async()=>{

    render(<MemoryRouter>
        <EmpForm/>
    </MemoryRouter>)
    const btn=
    screen.getByRole("button",{name:/submit/i})
    //read the button

//click the button
await userEvent.click(btn);
//chk the validation errors
 const unameError= await screen.findByText(/Name is required/i);
 const ageError = await screen.findByText(/Age is required/i);
 expect(unameError).toBeInTheDocument();
 expect(ageError).toBeInTheDocument();
})

test("Shows Age must be >= 18 ", async()=>{
    // test  shud not display Name is required
    //test  age >=18 
})