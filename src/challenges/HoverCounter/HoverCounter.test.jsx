import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import HoverCounter from './HoverCounter';

afterEach(cleanup);

describe('App component tests', () => {
  it('Renders the "Hover Me" button and h1 count element', () => {
    const { getByTestId } = render(<HoverCounter />);
    const button = getByTestId('button');
    const count = getByTestId('count');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Hover Me');
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('0');
  });

  it('Starts with a count of 0', () => {
    const { getByTestId } = render(<HoverCounter />);
    const count = getByTestId('count');
    expect(count.textContent).toBe('0');
  });

  it('Increments the count when the button is hovered over', () => {
    const { getByTestId } = render(<HoverCounter />);
    const button = getByTestId('button');
    const count = getByTestId('count');
    fireEvent.mouseEnter(button);
    expect(count.textContent).toBe('1');
    fireEvent.mouseEnter(button);
    expect(count.textContent).toBe('2');
  });
});
