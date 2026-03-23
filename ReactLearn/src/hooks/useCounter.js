import { useCallback, useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1 >= 0 ? count - 1 : 0);
  }, [count]);

  return { value: count, increment, decrement };
};
