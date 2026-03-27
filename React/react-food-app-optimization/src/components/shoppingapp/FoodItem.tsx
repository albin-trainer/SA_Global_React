import type { Food } from "./Food";
type FoodProps={
    key:number;
    food:Food;
    onAdd:(f:Food)=>void
}

const FoodItem=(f:FoodProps)=>{
    console.log("Child Food Item re renders...");
   
    return <>
    <tr>
    <td>{f.food.name}</td>
        <td>{f.food.price}</td>
        <td>
     <button onClick={()=>f.onAdd(f.food)}>Add to cart</button>
    </td>
</tr>
    </>
}

export default FoodItem;