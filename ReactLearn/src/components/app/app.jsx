import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Layout } from "../layout/layout";
import { useState } from "react";
import { ScrollProgress } from "../scrollProgress/scrollProgress";
import styles from "./app.module.css";
import { RestaurantButton } from "../restaurantButton/button";
// import { useRef } from "react";

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(
    restaurants.length > 0 ? restaurants[0] : null,
  );
  const buttonsBodyRef = useRef(null);
  useEffect(() => {
    if (buttonsBodyRef.current) {
      console.log(buttonsBodyRef.current);
      console.log(buttonsBodyRef.current.clientHeight);
    }
  }, []);

  // const [timeInSecond, setTimeInSecond] = useState(0);

  // var intervalElement = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeInSecond((prev) => prev + 1);
  //     intervalElement.current.innerText = timeInSecond;
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [timeInSecond]);

  return (
    <Layout>
      <ScrollProgress />
      <div className={styles.buttonsBody}>
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
