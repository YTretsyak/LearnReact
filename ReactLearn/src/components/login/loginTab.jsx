import { useSelector, useDispatch } from "../custom-redux/hooks";

export const LoginTab = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return loggedIn ? (
    <div>
      user: {user.name}{" "}
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
    </div>
  ) : (
    <div>
      <button onClick={() => dispatch({ type: "LOGIN" })}>Login</button>
    </div>
  );
};
