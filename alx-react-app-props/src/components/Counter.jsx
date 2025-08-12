import { useState } from 'react';

function Counter() {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Functions to handle button clicks
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  <p>Counter Component</p>
  // Render the component
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
        <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
