import { useCallback, useState } from "react";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./menu.module.css";

export const Menu = (props) => {
  const [dishCount, setDishCount] = useState(0);
  const incrementDishCount = useCallback(() => {
    setDishCount(dishCount + 1);
  }, [dishCount]);

  const decrementDishCount = useCallback(() => {
    setDishCount(dishCount - 1 >= 0 ? dishCount - 1 : 0);
  }, [dishCount]);

  return (
    <div className={styles.dish}>
      <h4 className={styles.dishName}>Name:{props.name}</h4>
      <h4>Price:{props.price}</h4>
      <h4>
        Ingredients:
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient}</li>
          ))}
        </ul>
      </h4>
      <DishCounter
        dishCount={dishCount}
        incrementDishCount={incrementDishCount}
        decrementDishCount={decrementDishCount}
      />
    </div>
  );
};
