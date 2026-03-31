const BASE_URL=`http://localhost:3001/employees`
export  function getAllEmps(){

}

export async function addNewEmp(emp:any){
 //Method : POST
 //Content-Type:application/json
   const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emp),
  });

  if (!res.ok) throw new Error("Failed to create");
  return res.json();
}

export async function deleteEmp(id:number){
    const res= await fetch(`BASE_URL/${id}`,{method:"DELETE"});
    if(!res.ok) throw new Error("Failed to delete")
    return res.json();
}

export function updateEmp(emp:any,id:number){

}

export function getById(id:number){

}