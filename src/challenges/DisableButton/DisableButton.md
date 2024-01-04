# Disable a button - 🟢 Easy

Write a component called App which returns two JSX elements. The first one is an input of type text and the second one is a button with the text “Click”. Your task is to disable the button when the input string has less than 3 characters.

## Directions

- Do not edit the data-testid attributes.
- Return a button element with the text Click.
- Disable the button if the current value of the input is less than 3 characters long.

## Solution

### Solution 1: Functional

```javascript
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  return (
    <>
      <input
        data-testid='input-id'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid='button-id' disabled={text.length < 3}>
        Click
      </button>
    </>
  );
};

export default App;
```

The component uses the useState hook to initialise a state variable called text with an initial value of an empty string. The hook returns an array with two items, the current state value and a function to update it. The array is destructured into the text variable, which holds the current state value and the setText function, which updates the value of the state variable.

In the component's return statement, it renders an input element of type text, which displays the current text value, and a button element labelled "Click". The input element has an onChange event that triggers the setText function when the input value changes. The setText function updates the text state variable with the value of the input element and in turn, re-renders the component with the new value displayed. The button element has a disabled property that checks if the length of the text variable is less than 3, if it is true, the button is disabled and if it is false, the button is enabled.

### Solution 2: Class-based

```javascript
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <>
        <input
          data-testid='input-id'
          type='text'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button data-testid='button-id' disabled={this.state.text.length < 3}>
          Click
        </button>
      </>
    );
  }
}

export default App;
```
