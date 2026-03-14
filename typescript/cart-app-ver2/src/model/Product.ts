export interface Product{
    id:number;
    prodName:string;
    price:number;
    ratings?:number;
    category:"BOOKS" | "APPARELS" | "ELECTRONICS" | "STATIONARY" //UNION TYPE
    
}