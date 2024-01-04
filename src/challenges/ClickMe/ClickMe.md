# Click me - 🟢 Easy

Write a simple component called App that displays a button with the text "Click me!" and logs a “Clicked!” message to the console when clicked.

## Directions

- Return a single button element with the text Click me!
- Log Clicked! to the console when the button is clicked.
- Do not edit the data-testid attributes.

## Solutions

### Functional

```javascript
const App = () => {
  return (
    <button data-testid='button' onClick={() => console.log('Clicked!')}>
      Click me!
    </button>
  );
};

export default App;
```

When the button is clicked, it triggers the function passed as the onClick event handler, which logs the string "Clicked!" to the console. This function will be called on every button-click event.

### Class-based

```javascript
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    console.log('Clicked!');
  };

  render() {
    return (
      <button data-testid='button' onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default App;
```
