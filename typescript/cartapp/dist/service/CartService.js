"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = exports.getAllCartItems = exports.addToCart = void 0;
function addToCart(cart, p, q) {
    //here cart item shud added in the array
    cart.push({ product: p, quantity: q });
}
exports.addToCart = addToCart;
function getAllCartItems(cart) {
    //return the product names items..
    let pnames = [];
    cart.forEach(c => pnames.push(c.product.prodName));
    return pnames;
}
exports.getAllCartItems = getAllCartItems;
function searchProduct(cart, search) {
    //use typeof operator to check the type and do the search
    // HINT : use find function of array
    if (typeof search === "string") {
        return cart.find(c => c.product.prodName === search);
    }
    return cart.find(c => c.product.id === search);
}
exports.searchProduct = searchProduct;
