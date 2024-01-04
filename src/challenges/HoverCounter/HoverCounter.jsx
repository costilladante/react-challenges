import { useState } from 'react';

const HoverCounter = () => {
  const [count, setCount] = useState(0);

  const onMouseEnter = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  // Edit this component
  return (
    <div>
      <button data-testid='button' onMouseEnter={onMouseEnter}>
        Hover Me
      </button>
      <h1 data-testid='count'>{count}</h1>
    </div>
  );
};

export default HoverCounter;
