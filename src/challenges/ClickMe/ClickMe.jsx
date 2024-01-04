const App = () => {
  // Edit this component
  const onClick = () => {
    console.log('Clicked!');
  };
  return (
    <button data-testid='button' onClick={onClick}>
      Click me!
    </button>
  );
};

export default App;
