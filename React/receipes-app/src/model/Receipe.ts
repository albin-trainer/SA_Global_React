export interface Ingredient{
    name:string;
    amount:string;
    measurement:string
}
export interface Receipe{
    name:string;
    image:string;
    ingredients:Ingredient[];
    steps:string[];
}