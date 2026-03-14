import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";

export function addToCart(cart:CartItem[],p:Product,q:number){
    //here cart item shud added in the array
    cart.push({product:p,quantity:q})
}
export function getAllCartItems(cart:CartItem[]) :string[] {
//return the product names items..
let pnames:Array<string>=[];
cart.forEach(c=> pnames.push(c.product.prodName) );
return pnames;
}
export function searchProduct(cart:CartItem[], search:string|number) : CartItem|undefined {
//use typeof operator to check the type and do the search
// HINT : use find function of array
if(typeof search==="string"){
    return cart.find(c=>c.product.prodName===search);
}
return cart.find(c=>c.product.id===search);
}

