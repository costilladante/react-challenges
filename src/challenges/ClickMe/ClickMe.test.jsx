import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './ClickMe';

afterEach(cleanup);

describe('App component tests', () => {
  it('Renders a button with "Click me!" text', () => {
    const { getByTestId, getByText } = render(<App />);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    getByText('Click me!');
  });

  it('Logs "Clicked!" when the button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const { getByTestId } = render(<App />);
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Clicked!');
    consoleSpy.mockRestore();
  });
});
