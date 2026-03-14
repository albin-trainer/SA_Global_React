"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CartService_1 = require("./services/CartService");
let cartService = new CartService_1.CartService();
cartService.addToCart({ id: 1, prodName: "Pencil",
    price: 10, ratings: 5,
    category: "STATIONARY" }, 5);
cartService.addToCart({ id: 2, prodName: "React Book",
    price: 1000, ratings: 5,
    category: "BOOKS" });
cartService.addToCart({ id: 2, prodName: "React Book",
    price: 1000, ratings: 5,
    category: "BOOKS" });
let cartitem = cartService.getCartItems();
console.log(cartitem.length);
let summary = cartService.getCheckoutSummary();
console.log("Total Items : " + summary[0]);
console.log("Total Price : " + summary[1]);
