import { addToCart, getProductNames, getTotalPrice } from "./service/cartservice.js";

console.log("test");
let cart=[];
let product={id:101,pname:"Laptop",price:50000};
addToCart(cart,product);
addToCart(cart,{id:102,pname:"Bag",price:1000});
addToCart(cart,{id:103,pname:"Mobile",price:10000});
addToCart(cart,{id:104,pname:"TV",price:20000});
addToCart(cart,{id:105,pname:"Shoes",price:2000});

let totalPrice=getTotalPrice(cart);
console.log(`Total amt to pay is ${totalPrice}`);

let productNames=getProductNames(cart);
for(p of productNames){
    console.log(p)
}