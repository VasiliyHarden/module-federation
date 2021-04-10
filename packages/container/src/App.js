import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/Marketing';

const App = () => {
  const containerRef = useRef();

  useEffect(() => {
    mount(containerRef.current);
  }, []);

  return (
    <div ref={containerRef}></div>
  );
};

export default App;
