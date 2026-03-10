import { useState } from "react";

export const Menu = (props) => {

  const [dishCount, setDishCount] = useState(0);

  return (
    <div style={{ border: "1px solid black", padding: "1rem", marginBottom: "1rem" }}>
      <h3>Dish:</h3>
      <h4>name:{props.name}</h4>
      <h4>price:{props.price}</h4>
      <h4>
        ingredients:
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient}</li>
          ))}
        </ul>
      </h4>
      <button onClick={() => setDishCount(dishCount + 1)}>+</button>
      <span>{dishCount}</span>
      <button onClick={() => setDishCount(dishCount - 1 >= 0 ? dishCount - 1 : 0)}>-</button>
    </div>
  );
};
