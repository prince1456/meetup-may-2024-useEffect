import React, { useEffect } from 'react';

function ComponentWillUnmountExample() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    // Cleanup function runs on component unmount
    return () => {
      clearInterval(timer);
      console.log('Component unmounted, timer cleared');
    };
  }, []); // Empty dependency array ensures this runs once

  return <div>Check the console for timer updates.</div>;
}

export default ComponentWillUnmountExample;
