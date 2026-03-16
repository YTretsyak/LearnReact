import { useReducer } from "react";

const INITIAL_FORM = {
  name: "",
  text: "",
  rating: 0
};

const SET_NAME_ACTION = "setNameAction";
const SET_TEXT_ACTION = "setTextAction";
const SET_RATING_ACTION = "setRatingAction";
const CLEAR_FORM_ACTION = "clearFormAction";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION:
      return { ...INITIAL_FORM, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_RATING_ACTION:
      return { ...state, rating: payload };
    case CLEAR_FORM_ACTION:
    default:
      return INITIAL_FORM;
  }
};

export const ReviewForm = (props) => {
  const reviews = props.reviews || [];
  const onReviewSubmit = props.onReviewSubmit || (() => {});
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, text, rating } = form;

  return (
    <form>
      <div>
        <label>name:</label>
        <input
          value={name}
          onChange={(event) => {
            dispatch({ type: SET_NAME_ACTION, payload: event.target.value });
          }}
        />
      </div>
      <div>
        <label>text:</label>
        <input
          value={text}
          onChange={(event) =>
            dispatch({ type: SET_TEXT_ACTION, payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>rating:</label>
        <input
          value={rating} type="number" min="0" max="5"
          onChange={(event) =>
            dispatch({ type: SET_RATING_ACTION, payload: event.target.value })
          }
        />
      </div>
      <div>
        <button type="button" onClick={() => dispatch({ type: CLEAR_FORM_ACTION })}>
          clear
        </button>
      </div>
      <div>
        <button onClick={(event) => {
            event.preventDefault();
            onReviewSubmit({
              id: reviews.length > 0 ? reviews[reviews.length - 1].id + 1 : 1,
              user: name,
              text,
              rating
            })
        
          dispatch({ type: CLEAR_FORM_ACTION });}}
          >
            Submit Review
          </button>
      </div>
    </form>
  );
};