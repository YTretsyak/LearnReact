import { Menu } from "../menu/menu";
import { Review } from "../review/review";

export const Restaurant = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.menu.map((menu) => (
          <li key={menu.id}>
            <Menu
              id={menu.id}
              name={menu.name}
              price={menu.price}
              ingredients={menu.ingredients}
            />
          </li>
        ))}
      </ul>
      {props.reviews.length > 0 && (
        <><h4>Reviews:</h4>
        <ul>
          {props.reviews.map((review) => (
            <li key={review.id}>
              <Review
                id={review.id}
                user={review.user}
              text={review.text}
              rating={review.rating}
            />
          </li>
        ))}
      </ul></>)}
    </div>
  );
};
