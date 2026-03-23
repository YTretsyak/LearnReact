import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./menu.module.css";
import { useCounter } from "../../hooks/useCounter";
import { useSelector } from "../custom-redux/hooks";

export const Menu = (props) => {
  const { value, increment, decrement } = useCounter(0);
  const loggedIn = useSelector((state) => state.loggedIn);

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
      {loggedIn && (
        <DishCounter
          dishCount={value}
          incrementDishCount={increment}
          decrementDishCount={decrement}
        />
      )}
    </div>
  );
};
