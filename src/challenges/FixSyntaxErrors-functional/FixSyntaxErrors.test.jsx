import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from './FixSyntaxErrors';

describe('App component tests', () => {
  it('displays the title', () => {
    const { getByText } = render(<ErrorPage />);
    expect(getByText('Errors in Programming')).toBeInTheDocument();
  });

  it('displays the first paragraph ', () => {
    const { getByText } = render(<ErrorPage />);
    expect(
      getByText('Everyone makes mistakes, including programmers!')
    ).toBeInTheDocument();
  });

  it('displays the list of errors', () => {
    const { getByText } = render(<ErrorPage />);
    expect(
      getByText(
        'Syntax Errors: These occur when the code is written incorrectly, and the compiler is unable to understand it. Examples include missing semicolons, quotes, or parentheses.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Logic Errors: These occur when the code is written correctly, but does not produce the expected result.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Run-time Errors: These occur when the code is executed, and something unexpected happens, such as a division by zero error.'
      )
    ).toBeInTheDocument();
  });

  it('displays the second paragraph', () => {
    const { getByText } = render(<ErrorPage />);
    expect(
      getByText(
        'The key to fixing errors is to identify the cause, and then make the necessary corrections. This can involve using debugging tools, or simply carefully reading the code and understanding what is happening.'
      )
    ).toBeInTheDocument();
  });
});
