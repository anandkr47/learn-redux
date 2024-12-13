import React from 'react';
import FinalCounterDisplay from './FinalCounterDisplay';

const IntermediateComponent = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      <h4>Intermediate Component</h4>
      <p>(Props passed through this component)</p>

      {/* Passing props to the child component */}
      <FinalCounterDisplay 
        count={count} 
        increment={increment} 
        decrement={decrement} 
        reset={reset} 
      />
    </div>
  );
};

export default IntermediateComponent;
