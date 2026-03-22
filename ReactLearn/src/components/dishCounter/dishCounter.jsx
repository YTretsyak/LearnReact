import styles from "./dishCounter.module.css";

export const DishCounter = (props) => {

    const dishCount = props.dishCount || 0;
    const incrementDishCount = props.incrementDishCount || (() => {});
    const decrementDishCount = props.decrementDishCount || (() => {});
    return (
        <div className={styles.dishCounter}>
            <h3>Dish Count:</h3>
            <button onClick={incrementDishCount}>+</button>
            <span>{dishCount}</span>
            <button onClick={decrementDishCount}>-</button>
        </div>
    );
};