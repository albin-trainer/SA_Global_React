import type { EmployeeFormData } from "../pages/employee/EmployeeForm";

const BASE_URL = "http://localhost:3001/employees";

export const  getAllEmps= async () => {
  console.log("fetching data from server ....")
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch employees");
  }

  return res.json();
};
export async function getEmpById(id:number){
 let resp= await fetch(`${BASE_URL}/${id}`)
 if(!resp.ok){
  throw new Error("Failed to retrive")
 }
 return resp.json();
}

export function delEmp(id:number){

}

export function addNewEmp(emp:EmployeeFormData){
   return    fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emp),
  });
}

export function updateEmp(emp:EmployeeFormData,id:number){
     
 return  fetch(`${BASE_URL}/${id}`, {method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emp),
  })
}



export async function loginUser({name,password}){
console.log(name,password)
//URL 
//http://localhost:3001/userlogin?username=Albin&password=1234
console.log("--in login service");
let loginUrl="http://localhost:3001/userlogin";
 let response= await fetch(`${loginUrl}?username=${name}&password=${password}`);
 let users=await response.json();
 //console.log(users);
 return users.length;
}




