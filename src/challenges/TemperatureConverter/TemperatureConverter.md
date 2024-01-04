# Temperature Converter

Write a component called App which accepts the temperature input in Celsius and converts it to Kelvin and Fahrenheit. Your component should have one input JSX element of type number that accepts input from the user.

Your component should return the following string in the p JSX element, as indicated in the starting code:

```console
{X}°C is {Y}°F and {Z}K.
```

Remember that X, Y and Z represent the temperature in Celsius, Fahrenheit and Kelvin respectively.

Use the formulas below for the conversions.

Celsius to Kelvin: `K = C + 273.15`

Celsius to Fahrenheit: `F = (C * 9/5) + 32`

## Directions

- Do not edit the data-testid attributes.
- You should round any output numbers to 2 decimal points.
- Return the output string in the p element.

## Solutions

### Functional

```javascript
import React, { useState } from 'react';

const App = () => {
  const [temperature, setTemperature] = useState(0);

  const celsiusToFahrenheit = (temp) => {
    return Math.round(((temp * 9) / 5 + 32) * 100) / 100;
  };

  const celsiusToKelvin = (temp) => {
    return Math.round((temp + 273.15) * 100) / 100;
  };

  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name='input'
          type='number'
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
        />
        <label for='input'>°C</label>
      </form>
      <p data-testid='output'>
        {temperature}°C is {celsiusToFahrenheit(temperature)}°F and{' '}
        {celsiusToKelvin(temperature)}K.
      </p>
    </div>
  );
};

export default App;
```

The component uses the useState hook to manage the temperature state, with an initial value of 0. When the user types in a new temperature value into the input field, the onChange event handler updates the temperature state.

The component then uses two functions, celsiusToFahrenheit and celsiusToKelvin, to convert the temperature value from Celsius to Fahrenheit and Kelvin, respectively. Finally, the component displays the input temperature value along with the two conversions in a paragraph element.

### Class-based

```javascript
import React, { Component } from 'react';

class App extends Component {
  state = {
    temperature: 0,
  };

  celsiusToFahrenheit = (temp) => {
    return Math.round(((temp * 9) / 5 + 32) * 100) / 100;
  };

  celsiusToKelvin = (temp) => {
    return Math.round((temp + 273.15) * 100) / 100;
  };

  handleChange = (e) => {
    this.setState({ temperature: parseFloat(e.target.value) });
  };

  render() {
    const { temperature } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid='input-id'
            name='input'
            type='number'
            value={temperature}
            onChange={this.handleChange}
          />
          <label for='input'>°C</label>
        </form>
        <p data-testid='output'>
          {temperature}°C is {this.celsiusToFahrenheit(temperature)}°F and{' '}
          {this.celsiusToKelvin(temperature)}K.
        </p>
      </div>
    );
  }
}

export default App;
```
