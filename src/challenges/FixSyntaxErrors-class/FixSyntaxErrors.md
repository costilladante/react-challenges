# Fix syntax errors - class - 🟢 Easy

You have been provided with a class component called App. The component keeps track of a count value stored in its state and displays it to the user. The user should be able to increment the count by clicking on a button, however, the code contains some bugs that need to be fixed.

Once the bugs have been fixed, the component should display the correct count value and log a message to the console only when the count value changes.

## Directions

Do not edit the data-testid attributes.

## Solution

```javascript
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log(`Count has been updated to: ${this.state.count}`);
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1 data-testid='title'>Counter</h1>
        <p data-testid='count'>Current Count: {this.state.count}</p>
        <button data-testid='button' onClick={this.incrementCount}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default App;
```

Here are the errors in the code:

1. `componentDidUpdate` method is using prevState which is incorrect, it should use this.state instead.
2. The `incrementCount` method updates the state using this.state.count++, which is an expression that increments the count after the current value of count is returned. So the state will not get updated as expected. To fix this issue, the state update should be written as { count: this.state.count + 1 }.
