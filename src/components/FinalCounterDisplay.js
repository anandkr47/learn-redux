import React from 'react';

const FinalCounterDisplay = ({ count, increment, decrement, reset }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Final Counter Display</h4>
      <h3>Count: {count}</h3>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={buttonStyle}>Decrement</button>
      <button onClick={reset} style={buttonStyle}>Reset</button>
    </div>
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 15px',
  fontSize: '16px',
};

export default FinalCounterDisplay;
