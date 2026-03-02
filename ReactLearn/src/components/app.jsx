import { restaurants } from "../../materials/mock";
import { Restaurant } from "./restaurant/restaurant";

export const App = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
          reviews={restaurant.reviews}
        />
      ))}
    </div>
  );
};
