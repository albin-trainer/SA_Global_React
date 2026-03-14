import { Address } from "./model/Address";
import { CartItem } from "./model/CartItem";
import { User } from "./model/User";
import { CartService } from "./services/CartService";

let cartService:CartService =new CartService();

cartService.addToCart({id:1,prodName:"Pencil",
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

  //can create a new type from the Existing type called as type
  //composing behaviour - 
  type UserProfile = User & Address; //intersection 

  let user:UserProfile={id:1,name:"Aravind",email:"aravind@sa.com",
    placeName:"Bangalore",pincode:123455};
  console.log(user.name)

  type MyName=string;    //from the exising string i created a new type called MyName
  let s:MyName="Albin"  //by using MyName type i m storing my name

  type data=[string,string,number];