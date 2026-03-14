"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
class CartService {
    constructor() {
        this.cart = [];
    }
    // argument product and quantity
    addToCart(product, quantity = 1) {
        //create CartItem object and copies attributes from product to cartitem 
        /*let cartData:CartItem=
        {id:product.id,prodName:product.prodName,
            price:product.price,ratings:product.ratings,
            category:product.category,quantity:quantity}; */
        let myCart = Object.assign(Object.assign({}, product), { quantity }); ///spread operator (copies alll fields from product to cart)  
        this.cart.push(myCart);
    }
    getCartItems() {
        return this.cart;
    }
}
exports.CartService = CartService;
