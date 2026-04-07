import { ProductCard } from "../components/ProductCard";
//server side component
async function getAllProducts() :any[]{
    let apiUrl="http://localhost:3000/api/products";
    //use fetch api to get the json data ...
    //and return it 
    let response= await   fetch(apiUrl);
    return  response.json();
   }
export default async  function Products(){
   let products:any[]= await getAllProducts();
return <>
    <h1>Products will display here</h1>
    <table border="1">
    {
        //display the data
        products.map(p=> <tr>
             <td> {p.id}</td> 
             <td> {p.name}</td> 
         </tr>)
    }
    </table>
    <h1>Client UI component</h1>
    {
        products.map(p=> <ProductCard  key={p.id} p ={p}/>)
    }
</>

}