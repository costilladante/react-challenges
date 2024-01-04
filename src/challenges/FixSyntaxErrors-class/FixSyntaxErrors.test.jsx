import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './FixSyntaxErrors';

describe('App component tests', () => {
  it('Renders the title, count, and button elements with the correct test IDs', () => {
    const { getByTestId } = render(<App />);
    const title = getByTestId('title');
    const count = getByTestId('count');
    const button = getByTestId('button');
    expect(title).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Increment Count');
  });

  it('Starts with a count of 0', () => {
    const { getByTestId } = render(<App />);
    const count = getByTestId('count');
    expect(count.textContent).toBe('Current Count: 0');
  });

  it('Increments the count when the button is clicked', () => {
    const { getByTestId } = render(<App />);
    const count = getByTestId('count');
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(count.textContent).toBe('Current Count: 1');
    fireEvent.click(button);
    expect(count.textContent).toBe('Current Count: 2');
  });
});
