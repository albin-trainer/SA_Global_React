import { CartItem } from "./model/CartItem";
import { CartService } from "./services/CartService";

let cartService:CartService =new CartService();

cartService.addToCart(
    {id:1,prodName:"Pencil",
        price:10,ratings:5,
        category:"STATIONARY"},5)
        
cartService.addToCart(
    {id:2,prodName:"React Book",
        price:1000,ratings:5,
        category:"BOOKS"});

        cartService.addToCart(
    {id:2,prodName:"React Book",
        price:1000,ratings:5,
        category:"BOOKS"});
  
        
 let cartitem:CartItem[]=  cartService.getCartItems();
 console.log(cartitem.length)

 let summary=cartService.getCheckoutSummary();

 console.log("Total Items : "+summary[0])
  console.log("Total Price : "+summary[1])