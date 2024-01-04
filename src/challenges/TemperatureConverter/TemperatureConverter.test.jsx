import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './TemperatureConverter';

describe('App component tests', () => {
  it('Renders the input element', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input-id');
    expect(input).toBeInTheDocument();
  });

  it('Renders the output string with correct values', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input-id');
    const output = getByTestId('output');
    fireEvent.change(input, { target: { value: '25' } });
    expect(output).toHaveTextContent('25°C is 77°F and 298.15K.');
  });

  it('Rounds the output numbers to 2 decimal points', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input-id');
    const output = getByTestId('output');
    fireEvent.change(input, { target: { value: '10' } });
    expect(output).toHaveTextContent('10°C is 50°F and 283.15K.');
  });

  it('Converts 0 temperature in Celsius to Fahrenheit and Kelvin', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input-id');
    const output = getByTestId('output');
    fireEvent.change(input, { target: { value: '0' } });
    expect(output).toHaveTextContent('0°C is 32°F and 273.15K.');
  });

  it('Converts negative temperature in Celsius to Fahrenheit and Kelvin', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input-id');
    const output = getByTestId('output');
    fireEvent.change(input, { target: { value: '-40' } });
    expect(output).toHaveTextContent('-40°C is -40°F and 233.15K.');
  });
});
