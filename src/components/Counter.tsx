import React, { useState, useEffect } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  // Simulate componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // This effect runs every time 'count' changes
  
//   wrong way to use useEffect even if you click on Toggle details still you will see the console log for counter
//   useEffect(() => {
//     console.log(`Count updated: ${count}`);
//   }); 

//   useEffect(() => {
//     console.log(`Count updated in infinte loop: ${count}`);
//     // its ok because you reset the count to0
//     setCount(0)
//     // infinite loop 
//     // setCount(prev => prev + 1)

//   }, [count]); 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div className=' flex flex-row gap-x-10'>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleDetails}>Toggle Details</button>
      {showDetails && <p>This is some additional detail text.</p>}
    </div>
  );
}

export default CounterComponent;
