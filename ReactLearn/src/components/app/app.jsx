import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Layout } from "../layout/layout";
import { useState } from "react";
import { ScrollProgress } from "../scrollProgress/scrollProgress";
import styles from "./app.module.css";
import { RestaurantButton } from "../restaurantButton/button";
// import { useRef } from "react";
import { ThemeProvider } from "../themeProvider/ThemeProvider";
import { ToggleThemeButton } from "../toggleThemeButton/toggleThemeButton";
import { LoginTab } from "../login/loginTab";
import { UserProvider } from "../custom-redux/provider";
import { store } from "../store/index";

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(
    restaurants.length > 0 ? restaurants[0] : null,
  );

  return (
    <ThemeProvider>
      <UserProvider store={store}>
        <LoginTab />
        <ToggleThemeButton />
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
      </UserProvider>
    </ThemeProvider>
  );
};
