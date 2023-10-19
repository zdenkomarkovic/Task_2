import React, { useState } from 'react';

const Counter = OriginalComponent => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count => count + 1);
    };
    const decrement = () => {
      setCount(count => count - 1);
    };
    return (
      <OriginalComponent
        increment={increment}
        decrement={decrement}
        count={count}
      />
    );
  };
  return NewComponent;
};

export default Counter;
