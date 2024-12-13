import React, { useState } from 'react';
import IntermediateComponent from './IntermediateComponent';

const PropsDrillCounter = () => {
  const [count, setCount] = useState(0); // Counter state

  // Functions to update the state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Props Drilling Example</h2>
      <p>Counter is passed down through components</p>

      {/* Passing state and functions as props */}
      <IntermediateComponent 
        count={count} 
        increment={increment} 
        decrement={decrement} 
        reset={reset} 
      />
    </div>
  );
};

export default PropsDrillCounter;
