import { AddToCartDTO } from "../dto/AddToCartDTO";
import { ApiResponse } from "../dto/ApiResponse";
import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";
import { CheckoutSummary } from "../types/CheckoutSummary";

export class CartServiceNew{

//private products:Product[]=[] ; ///EMPTY ARRAY
//ASSUME these data is present in the DB
private products:Product[]=[
        {id:1,prodName:"Pencil",
        price:10,ratings:5,
        category:"STATIONARY"},

        {id:2,prodName:"Pen",
        price:50,ratings:5,
        category:"STATIONARY"},

        {id:3,prodName:"Erasure",
        price:6,ratings:5,
        category:"STATIONARY"},

        {id:4,prodName:"React Book",
        price:1000,ratings:5,
        category:"BOOKS"},
]
private cart:CartItem[]=[]; //empty cart Array .....
    addToCart(dto:AddToCartDTO) : ApiResponse<Product>{
        //from dto read the prod id and get the product from the BACKEND(now another array)
        //and store in the cart array
        //returns undefined if not found
        //from backend
         let product= this.products.find(i=>i.id==dto.productId);
         if(!product){
            return  {
                status:false,
                message:"Product not found",
                data:null
            };
         }
         else{
            //needs to read the quantity and update the quantity
            //then add to cart
            let existing=this.cart.find(i=>i.id==product.id);
            if(existing){
                existing.quantity+=dto.quantity;
            }
            else //dont add, just update the quantity
                 this.cart.push({...product,quantity:dto.quantity})
           return{
            status:true,
            message:"Added Successfully",
            data:product
           }      
         }
    }
    getCartItems(): ApiResponse<CartItem[]>{
        //pls correct this
        return {
            status:true,
            message:"Found",
            data:this.cart
        }
    }

    removeItemFromCart(productId:number) :ApiResponse<Product>{
        return {
            status:false,
            data:null
        }
    }
    getCheckoutSummary():ApiResponse<CheckoutSummary>{
                throw new Error("not implemented .....")
    }
}