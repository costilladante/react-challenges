import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpForm from './ValidateSignUpForm';

describe('App component tests', () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  test('renders form with all input fields and a submit button', () => {
    expect(screen.getByTestId('first-name-id')).toBeInTheDocument();
    expect(screen.getByTestId('last-name-id')).toBeInTheDocument();
    expect(screen.getByTestId('email-id')).toBeInTheDocument();
    expect(screen.getByTestId('password-id')).toBeInTheDocument();
    expect(screen.getByTestId('confirm-password-id')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign up/i })
    ).toBeInTheDocument();
  });

  test('displays validation errors on form submission', () => {
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    expect(screen.getByTestId('first-name-error-id')).toHaveTextContent(
      'First name cannot be empty'
    );
    expect(screen.getByTestId('last-name-error-id')).toHaveTextContent(
      'Last name cannot be empty'
    );
    expect(screen.getByTestId('email-error-id')).toHaveTextContent(
      'Invalid email address'
    );
    expect(screen.getByTestId('password-error-id')).toHaveTextContent(
      'Password must be greater than 7 characters'
    );
  });

  test('submits the form successfully with valid input values', () => {
    const consoleLogSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});

    fireEvent.change(screen.getByTestId('first-name-id'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByTestId('last-name-id'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByTestId('email-id'), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByTestId('password-id'), {
      target: { value: 'Password123' },
    });
    fireEvent.change(screen.getByTestId('confirm-password-id'), {
      target: { value: 'Password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    expect(consoleLogSpy).toHaveBeenCalledWith('Form submitted successfully');
    consoleLogSpy.mockRestore();
  });
});
