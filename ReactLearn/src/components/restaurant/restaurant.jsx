import { Menu } from "../menu/menu";
import { Review } from "../review/review";
import { ReviewForm } from "../reviewForm/reviewForm";
import { useState } from "react";
import { useSelector } from "../custom-redux/hooks";

export const Restaurant = (props) => {
  const [reviews, setReviews] = useState(props.reviews || []);
  const loggedIn = useSelector((state) => state.loggedIn);
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
      {reviews.length > 0 && (
        <>
          <h4>Reviews:</h4>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <Review
                  id={review.id}
                  user={review.user}
                  text={review.text}
                  rating={review.rating}
                />
              </li>
            ))}
          </ul>
        </>
      )}
      {loggedIn && (
        <div>
          <ReviewForm
            reviews={reviews}
            onReviewSubmit={(newReview) => {
              setReviews([...reviews, newReview]);
            }}
          />
        </div>
      )}
    </div>
  );
};
