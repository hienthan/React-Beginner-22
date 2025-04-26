import { useState } from "react";

const useCount = (init = 0) => {
  const [ count, setCount ] = useState(init);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount(0);
  };

  return { count, increase, decrease, restart };
};

export default useCount;
