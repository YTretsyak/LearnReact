import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Layout } from "../layout/layout";
import { useState } from "react";
import { ScrollProgress } from "../scrollProgress/scrollProgress";
import styles from "./app.module.css";
import { RestaurantButton } from "../restaurantButton/button";

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants.length > 0 ? restaurants[0] : null);
  return (
    <Layout>
      <ScrollProgress/>
      <div className = {styles.buttonsBody}>
      {restaurants.map((restaurant) => ( 
        <RestaurantButton
          key={restaurant.id}
          restaurant={restaurant}
          setActiveRestaurant={setActiveRestaurant}
        />
      ))}
      </div>
      {activeRestaurant && (
        <Restaurant
          key={activeRestaurant.id}
          id={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}
    </Layout>
  );
};
