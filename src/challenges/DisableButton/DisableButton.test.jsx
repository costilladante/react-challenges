import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './DisableButton';

afterEach(cleanup);

describe('App component tests', () => {
  it('Should render an input element', () => {
    const wrapper = render(<App />);
    const input = wrapper.getByTestId('input-id');
    expect(input).toBeInTheDocument();
  });

  it('Should render a button element with text "Click"', () => {
    const wrapper = render(<App />);
    const button = wrapper.getByTestId('button-id');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Click');
  });

  it('Should have the button disabled by default', () => {
    const wrapper = render(<App />);
    const button = wrapper.getByTestId('button-id');
    expect(button).toBeDisabled();
  });

  it('Should enable the button when input value is at least 3 characters long', () => {
    const wrapper = render(<App />);
    const input = wrapper.getByTestId('input-id');
    const button = wrapper.getByTestId('button-id');

    fireEvent.change(input, { target: { value: 'abc' } });
    expect(button).toBeEnabled();
  });

  it('Should disable the button when input value is less than 3 characters long', () => {
    const wrapper = render(<App />);
    const input = wrapper.getByTestId('input-id');
    const button = wrapper.getByTestId('button-id');

    fireEvent.change(input, { target: { value: 'ab' } });
    expect(button).toBeDisabled();
  });

  it('Should update the input value when user types in the input', () => {
    const wrapper = render(<App />);
    const input = wrapper.getByTestId('input-id');

    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input.value).toBe('abc');
  });
});
