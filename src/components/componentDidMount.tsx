import React, { useEffect, useState } from 'react';

function ComponentDidMountExample() {
  const [data, setData] = useState(null);
console.log({data})
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log("fetched data", data)
        setData(data)
      }
    );
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default ComponentDidMountExample;
