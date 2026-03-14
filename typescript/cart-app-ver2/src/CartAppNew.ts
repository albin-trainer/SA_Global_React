import { CartServiceNew } from "./services/CartServiceNew";

let cartService:CartServiceNew=
new CartServiceNew();
//i shud call addToCart
cartService.addToCart({productId:1,quantity:5});

//create obj of AddToCartDTO
