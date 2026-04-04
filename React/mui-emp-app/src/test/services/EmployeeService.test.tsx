import { render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import EmployeeForm from "../../pages/employee/EmployeeForm"
import userEvent from "@testing-library/user-event"
import { addNewEmp } from "../../services/EmployeeService";
// Create Flow Test
vi.mock("../../services/EmployeeService", () => ({
  addNewEmp: vi.fn(),
  getEmpById: vi.fn(),
  updateEmp: vi.fn(),
}));


test("Show validation Error Employee Form", async()=>{
render(<MemoryRouter><EmployeeForm/> </MemoryRouter>)
const btn= screen.getByRole("button",{name:/save/i});
await userEvent.click(btn);
expect(await screen.findByText("Name is required")).toBeInTheDocument();
//likewise test other fields ....
})


test("Should submit the form successfully and call addnewEmp", async()=>{
render(<MemoryRouter><EmployeeForm/> </MemoryRouter>)
 await userEvent.type( screen.getByLabelText("Name"),"Karthik")

  await userEvent.type( screen.getByLabelText("Age"),"25")
  await userEvent.type( screen.getByLabelText("Email"),"karthik@example.com")
  //select the drowpwn
  await userEvent.click( screen.getByLabelText(/department/i));
  await userEvent.click(screen.getByRole("option",{name:"IT"}));


const genderGroup = screen.getByRole("radiogroup", { name: /gender/i });

await userEvent.click(
  within(genderGroup).getAllByRole("radio", { name: /male/i })[0]
);
  await userEvent.click(screen.getByRole("button", { name: /save/i }));
  
  expect(addNewEmp).toHaveBeenCalledWith({
    name: "Karthik",
    age: "25",
    email: "karthik@example.com",
    dept: "IT",
    gender: "Male"
  });
//const btn= screen.getByRole("button",{name:/save/i});
//await userEvent.click(btn);
//expect(await screen.findByText("Name is required")).toBeInTheDocument();
//likewise test other fields ....
})