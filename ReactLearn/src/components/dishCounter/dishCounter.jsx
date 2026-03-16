export const DishCounter = (props) => {

    const dishCount = props.dishCount || 0;
    const incrementDishCount = props.incrementDishCount || (() => {});
    const decrementDishCount = props.decrementDishCount || (() => {});
    return (
        <div style={{ border: "1px solid black", padding: "1rem", marginBottom: "1rem" }}>
            <h3>Dish Count:</h3>
            <button onClick={incrementDishCount}>+</button>
            <span>{dishCount}</span>
            <button onClick={decrementDishCount}>-</button>
        </div>
    );
};