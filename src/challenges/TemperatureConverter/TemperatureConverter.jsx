import { useState } from 'react';

const toKelvin = (celsiusTemperature) => {
  return (celsiusTemperature + 273.15).toFixed(2);
};

const toFahrenheit = (celsiusTemperature) => {
  return Math.round((celsiusTemperature * 9) / 5 + 32, 2);
};

const App = () => {
  // Edit this component
  const [temperature, setTemperature] = useState(0);

  const onChange = (event) => {
    setTemperature(parseFloat(event.target.value)); // Not parsing would cause bug... wtf?
  };

  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name='input'
          type='number'
          onChange={onChange}
        />
        <label for='input'>°C</label>
      </form>
      <p data-testid='output'>
        {`${temperature}°C is ${toFahrenheit(temperature)}°F and ${toKelvin(
          temperature
        )}K.`}
      </p>
    </div>
  );
};

export default App;
