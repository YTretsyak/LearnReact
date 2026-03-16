import { useCallback, useState } from "react";
import { DishCounter } from "../dishCounter/dishCounter";

export const Menu = (props) => {

  const [dishCount, setDishCount] = useState(0);
  const incrementDishCount = useCallback(() => {
    setDishCount(dishCount + 1);
  }, [dishCount]);

  const decrementDishCount = useCallback(() => {
    setDishCount(dishCount - 1 >= 0 ? dishCount - 1 : 0);
  }, [dishCount]);

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
      <DishCounter dishCount={dishCount} incrementDishCount={incrementDishCount} decrementDishCount={decrementDishCount} />
    </div>
  );
};
