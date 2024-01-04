# Hover Counter - 🟢 Easy

Create a component called App that displays the number of times the user has hovered a button with the text “Hover Me”. The count should be displayed in an h1 element and updated each time the user hovers over the button. The initial value of the count should be set to 0.

## Directions

- Set the initial value of the hover count to 0.
- Return a button element with the text Hover Me.
- Do not edit the data-testid attributes.

## Solutions

### Solution 1: functional

```javascript
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button data-testid='button' onMouseEnter={() => setCount(count + 1)}>
        Hover Me
      </button>
      <h1 data-testid='count'>{count}</h1>
    </div>
  );
};

export default App;
```

The component uses the useState hook from React to manage the state of the count.

When the mouse enters the button, the count increases by 1. The setCount function is called to update the count, which triggers a re-render of the component, causing the updated count to be displayed in the heading. The count state is initially set to 0.

### Solution 2: class-based

```javascript
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleMouseEnter = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button data-testid='button' onMouseEnter={this.handleMouseEnter}>
          Hover Me
        </button>
        <h1 data-testid='count'>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
```
