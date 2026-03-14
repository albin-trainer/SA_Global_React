import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";
import { CheckoutSummary } from "../types/CheckoutSummary";

export class CartService{
    private cart:CartItem[]=[];
    // argument product and quantity
    addToCart(product:Product,quantity:number=1){
        //create CartItem object and copies attributes from product to cartitem 
        /*let cartData:CartItem=
        {id:product.id,prodName:product.prodName,
            price:product.price,ratings:product.ratings,
            category:product.category,quantity:quantity}; */

        let existingItem=this.cart.find(i=>i.id==product.id)
        if(existingItem){
            quantity=existingItem.quantity+quantity;
        }
        let myCart={...product,quantity};   ///spread operator (copies alll fields from product to cart)  
        this.cart.push(myCart);
    }

    getCartItems():CartItem[]{
        return this.cart;
    }

    getCheckoutSummary():CheckoutSummary{
         let totalItems:number=0;
         let totalPrice=0;
         for(let c of this.cart){
          totalItems=  totalItems+c.quantity;
         }

         for(let c of this.cart){
         totalPrice=   totalPrice+c.price;
         }
        return [totalItems,totalPrice];
    }
}