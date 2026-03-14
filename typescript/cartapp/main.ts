//create a prod obj
//create CartItem obj
import { CartItem } from "./model/CartItem";
import { Product } from "./model/Product";
import { addToCart, getAllCartItems, searchProduct } from "./service/CartService";
//call the service
let p1:Product={id:101,prodName:"Laptop",price:50000,ratings:4.5};
let p2:Product={id:102,prodName:"Bag",price:1000};

let cartItems:CartItem[]=[{product:p1,quantity:1},
    {product:p2,quantity:2}];
    //iterate 
    //compile & run
    for(let c of cartItems){
        console.log(c.product.prodName)
        console.log(c.quantity);
        console.log("------------")
    }

    addToCart(cartItems,{id:101,prodName:"Chocolates",price:10},5)

    let pnames:Array<string>=getAllCartItems(cartItems);
    for(let s of pnames){
        console.log(s)
    }
    let c:CartItem|undefined=  searchProduct(cartItems,1);
    console.log(`found by id ${c?.product.prodName}`)//optional chaining
    c=searchProduct(cartItems,"Laptop");
        console.log(`found by pname ${c?.product.prodName}`)

let num=10;
console.log(num)


