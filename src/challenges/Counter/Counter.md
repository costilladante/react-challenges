# Counter - 🟢 Easy

Write a component called App. Add two buttons, one with the text “Increment” and the other with the text “Decrement”. This component should track the difference between how many times the Increment vs Decrement buttons were clicked. Display the current count to the page in an h1 element.

## Directions

- Return a button with the text Increment.
- Return a button with the text Decrement.
- Return the current count in h1 element.
- Do not edit the data-testid attributes.

## Solutions

### Functional

```javascript
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 data-testid='count'>{count}</h1>
      <button data-testid='increment' onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button data-testid='decrement' onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </>
  );
};

export default App;
```

This solution uses the useState hook to initialise a state variable called count with an initial value of 0. The hook returns an array with two items, the current state value and a function to update it. The array is destructured into the count variable, which holds the current state value and the setCount function, which updates the value of the state variable.

In the component's return statement, it renders an h1 element which displays the current count value, and two buttons, one labelled "Increment" and the other labelled "Decrement". The onClick event of the increment button calls the setCount function, passing in the current count value plus 1 as the argument. This updates the count state variable with a new value, and in turn, re-renders the component with the new value displayed. Similarly, the onClick event of the decrement button calls the setCount function, passing in the current count value minus 1 as the argument.

### Class-component

```javascript
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <>
        <h1 data-testid='count'>{this.state.count}</h1>
        <button data-testid='increment' onClick={this.increment}>
          Increment
        </button>
        <button data-testid='decrement' onClick={this.decrement}>
          Decrement
        </button>
      </>
    );
  }
}

export default App;
```
