import { render, screen } from "@testing-library/react"
import { Counter } from "./Counter"
import userEvent from "@testing-library/user-event"

test("Test Counter App", async ()=>{
render(<Counter/>)
const txt= screen.getByText("Counter Demo")
expect(txt); //doing the testing ....

const count=screen.getByText("0");
expect(count);
//get the button
const btn=screen.getByRole("button",{name:"Increment"})
//click the button
//click returns promise Async call
 await userEvent.click(btn);
  await userEvent.click(btn);
   await userEvent.click(btn);
    await userEvent.click(btn);
 //this code called before the click completed....
expect (screen.getByText("4"))
//chk the count
for(let i=1;i<=10;i++){
    await userEvent.click(btn);
}
expect(screen.getByText("14"))
}  )
test("Show the name with Hello", async()=>{
    render(<Counter/>)
    //read the textbox
    const txtBox=screen.getByPlaceholderText("Enter Name");
    //start typing
  await  userEvent.type(txtBox,"Ajith");  
    //read the button
    const btn=screen.getByRole("button",{name:"Enter"});
   await userEvent.click(btn);//click the button
    //expect the text appear in the screen
    expect(screen.getByText("Hello Ajith"))
})