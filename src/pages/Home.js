import React from 'react';
import Counter from '../components/counter'; // Redux Counter
import LocalCounter from '../components/LocalCounter'; // Local useState Counter
import PropsDrillCounter from '../components/PropsDrillCounter'; // Props Drilling Example

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Counter Application</h1>
      
      {/* Global Counter using Redux */}
      <Counter />

      {/* Local Counter using useState */}
      <LocalCounter />

      {/* Props Drilling Example */}
      <PropsDrillCounter />
    </div>
  );
}

export default Home;
