import styles from "./button.module.css";

export const RestaurantButton = (props) => {
  const { restaurant, setActiveRestaurant } = props;

  return (
    <button
      className={styles.restaurantButton}
      key={restaurant.id}
      onClick={() => setActiveRestaurant(restaurant)}
    >
      {restaurant.name}
    </button>
  );
};
