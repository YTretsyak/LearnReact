import { createStore } from "../custom-redux/store";

const defaultState = { user: { name: null }, loggedIn: false };

const rootReducer = (state, action) => {
  switch (action?.type) {
    case "LOGIN":
      return {
        ...state,
        user: { name: "John Doe" },
        loggedIn: true,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};

const createdStoreFunc = createStore();
export const store = createdStoreFunc(rootReducer, defaultState);
