import { restaurants } from "../../materials/mock";
import { Restaurant } from "./restaurant/restaurant";
import { Layout } from "./layout/layout";
import { useState } from "react";

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants.length > 0 ? restaurants[0] : null);
  return (
    <Layout>
      <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      {restaurants.map((restaurant) => ( 
        <button key={restaurant.id} onClick={() => setActiveRestaurant(restaurant)}>
          {restaurant.name}
        </button>
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
