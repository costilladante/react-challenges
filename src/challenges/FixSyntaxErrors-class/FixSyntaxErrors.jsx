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
