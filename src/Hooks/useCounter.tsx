import React, { useState } from 'react';

type UseCounter = {
  initialCount?: number;
};

function UseCounter({ initialCount = 0 }: UseCounter = {}) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 2);
  return {
    count,
    increment,
    decrement,
  };
}

export default UseCounter;
