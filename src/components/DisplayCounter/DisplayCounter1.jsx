import React from 'react';
import Counter from '../HOC/Counter';

const DisplayCounter1 = ({ increment, decrement, count }) => {
  return (
    <div className='flex gap-5 text-[50px] my-5'>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter(DisplayCounter1);
