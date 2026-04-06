
async function  getProduct(slug) :any[]{
    console.log(`http://localhost:3001/products?slug=${slug}`)
   let resp=  await fetch(`http://localhost:3001/products?slug=${slug}`);
   return resp.json();
}
export default async function ProductPage({params}){ //Destructuring the props
    let {slug}= await params; //obj destructuring .....
    console.log( `Slug is ${slug}`)
    let product:any[]= await getProduct(slug)
    console.log(product)
    console.log(product[0])
    return <>
        <h1>Specific Product  {slug}</h1>
        <h1>{product[0].brand}</h1>
    </>
}