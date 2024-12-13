import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={buttonStyle}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={buttonStyle}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())} style={buttonStyle}>
        Reset
      </button>
    </div>
  );
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
};

export default Counter;
