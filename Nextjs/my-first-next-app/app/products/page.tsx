import { Product } from "../components/Product"

//BEST Practice to create the fund
export function generateMetadata(){
  return { title:"Iphone, Sony, Books and Bottle", description:" Products like mobilem TV"}
}
async function  getProducts() :any[]{
   let resp=  await fetch("http://localhost:3001/products");
   return resp.json();
}

export default async function Products(){
    let products:any[]= await getProducts();
    return <>
        <h1>Products will display here</h1>
        <table border="1">
            <tr>
                <th>id</th>
                <th>Pname</th>
                 <th>Price</th>
                  <th>Description</th>
            </tr>      
             {
                products.map(p=> 
                <Product p={p}></Product> )
             }
          </table>
    </>
}