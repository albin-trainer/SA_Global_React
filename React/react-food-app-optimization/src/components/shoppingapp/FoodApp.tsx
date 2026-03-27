import { useState } from "react";
import FoodItem from "./FoodItem";
import type { Food } from "./Food";
import { foods } from "./FoodData";

function FoodApp() {
  const [cart, setCart] = useState<Food[]>([]);
  const [search, setSearch] = useState<string>(""); 

  const addToCart = (food: Food) => {
    console.log("Adding to cart");
    setCart([...cart, food]);
  };
//calculate the total price
  const total = cart.reduce((sum, item) => {
    console.log("calculating ....")
    return sum + item.price
  }, 0);

  const filteredFoods = foods.filter(food => {
    console.log("filtering ...")
   // if(food)
    return food.name.toLowerCase().includes(search.toLowerCase())
  }
  );
  return (
    <>
      <h2>Total: Rs. {total}</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <tr>
          <th>Id</th>
          <th>Food Name</th>
          <th>Action</th>
        </tr>

        {/*  use filtered list instead of foods */}
        {filteredFoods.map(food => (
          <FoodItem key={food.id} food={food} onAdd={addToCart} />
        ))}
      </table>
    </>
  );
}

export default FoodApp;