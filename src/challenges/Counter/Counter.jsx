import { useState } from 'react';

const App = () => {
  // Edit this component
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const handleDecrement = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  return (
    <>
      <h1 data-testid='count'>{count}</h1>
      <button data-testid='increment' onClick={handleIncrement}>
        Increment
      </button>
      <button data-testid='decrement' onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};

export default App;
