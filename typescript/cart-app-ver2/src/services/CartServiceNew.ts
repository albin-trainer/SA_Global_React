import { AddToCartDTO } from "../dto/AddToCartDTO";
import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";

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
    addToCart(dto:AddToCartDTO){
        //from dto read the prod id and get the product from the BACKEND(now another array)
        //and store in the cart array
    }
    getCartItems():CartItem[]{
        return [];
    }
}