import React, { useState } from 'react';

const LocalCounter = () => {
  const [count, setCount] = useState(0); // Local state for the counter

  const increment = () => setCount(count + 1); // Increment function
  const decrement = () => setCount(count - 1); // Decrement function
  const reset = () => setCount(0);             // Reset function

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Local Counter (useState)</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment} style={buttonStyle}>
        Increment
      </button>
      <button onClick={decrement} style={buttonStyle}>
        Decrement
      </button>
      <button onClick={reset} style={buttonStyle}>
        Reset
      </button>
    </div>
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 15px',
  fontSize: '16px',
};

export default LocalCounter;
