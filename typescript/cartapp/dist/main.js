"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CartService_1 = require("./service/CartService");
//call the service
let p1 = { id: 101, prodName: "Laptop", price: 50000, ratings: 4.5 };
let p2 = { id: 102, prodName: "Bag", price: 1000 };
let cartItems = [{ product: p1, quantity: 1 },
    { product: p2, quantity: 2 }];
//iterate 
//compile & run
for (let c of cartItems) {
    console.log(c.product.prodName);
    console.log(c.quantity);
    console.log("------------");
}
(0, CartService_1.addToCart)(cartItems, { id: 101, prodName: "Chocolates", price: 10 }, 5);
let pnames = (0, CartService_1.getAllCartItems)(cartItems);
for (let s of pnames) {
    console.log(s);
}
let c = (0, CartService_1.searchProduct)(cartItems, 1);
console.log(`found by id ${c === null || c === void 0 ? void 0 : c.product.prodName}`); //optional chaining
c = (0, CartService_1.searchProduct)(cartItems, "Laptop");
console.log(`found by pname ${c === null || c === void 0 ? void 0 : c.product.prodName}`);
let num = 10;
console.log(num);
