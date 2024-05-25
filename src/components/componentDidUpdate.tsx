import React, { useEffect } from 'react';

function ComponentDidUpdateExample({ count }) {
  useEffect(() => {
    console.log(`The count is now: ${count}`);
  }, [count]); // Dependency array with 'count' ensures this runs on count update

  return <div>Count: {count}</div>;
}

export default ComponentDidUpdateExample;
