import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageFeed from './MessageFeed';

describe('App component tests', () => {
  it('Renders a message feed container', () => {
    const { getByTestId } = render(<MessageFeed />);
    expect(getByTestId('message-container')).toBeInTheDocument();
  });

  it('Renders a message input field', () => {
    const { getByTestId } = render(<MessageFeed />);
    expect(getByTestId('message-input')).toBeInTheDocument();
  });

  it('Adds a new message when the user presses Shift + Enter', () => {
    const { getByTestId } = render(<MessageFeed />);

    const input = getByTestId('message-input');
    fireEvent.change(input, { target: { value: 'Hello, world!' } });

    const messageContainer = getByTestId('message-container');
    expect(messageContainer).not.toHaveTextContent('Hello, world!');

    fireEvent.keyDown(input, { key: 'Enter', shiftKey: true });

    expect(messageContainer).toHaveTextContent('Hello, world!');
    expect(input).toHaveValue('');
  });

  it('Does not add a new message when the user presses Enter without Shift', () => {
    const { getByTestId } = render(<MessageFeed />);

    const input = getByTestId('message-input');
    fireEvent.change(input, { target: { value: 'Hello, world!' } });

    const messageContainer = getByTestId('message-container');
    expect(messageContainer).not.toHaveTextContent('Hello, world!');

    fireEvent.keyDown(input, { key: 'Enter' });

    expect(messageContainer).not.toHaveTextContent('Hello, world!');
    expect(input).toHaveValue('Hello, world!');
  });
});
