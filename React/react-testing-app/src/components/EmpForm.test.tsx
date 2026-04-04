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

//This a Fake navigate object ..its empty object
const mockNavigate = vi.fn(); //just returns any mock object


vi.mock("react-router-dom", async () => {
    //From the react-router-dom lib import all the features like 
    //Link, Routing config .. etc ... 
  const actual = await vi.importActual<any>("react-router-dom");
  return {
    //useNabigate() is a built-n Func in react-router-dom
    //instead of useNavigate we override MockNavigate
    ...actual, useNavigate: () => mockNavigate, //except navigation , other features copied
  };
});

test("Successful Registration", async()=>{

    //light weight router ... currently test env is running on jsdom
    // NOT a browser
    render(<MemoryRouter>
        <EmpForm/>
    </MemoryRouter>)
  const uname=screen.getByPlaceholderText("Name");
  await userEvent.type(uname,"testname");
  const age=screen.getByPlaceholderText("Age");
 await userEvent.type(age,"20");
 const btn=  screen.getByRole("button",{name:/submit/i});
 await userEvent.click(btn)
 const namerequired=await screen.queryByText("Name is required");
  expect(namerequired).not.toBeInTheDocument();

 const agerequired=await screen.queryByText("Age is required");
  expect(agerequired).not.toBeInTheDocument();

  //Integeration ....
expect(mockNavigate).toHaveBeenCalledWith("/success");


  //test whether the routing happened OR Not

 //const succesmsg=await screen.queryByText("Registration Success");
  //expect(succesmsg).toBeInTheDocument();

})