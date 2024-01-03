import { render, screen } from '@testing-library/react';
import { ValidateMarkup } from './validateMarkup';
import '@testing-library/jest-dom';

describe('ValidateMarkup', () => {
  it('should render the component', () => {
    render(<ValidateMarkup />);
    expect(screen.getByText('Validate Markup')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(
      screen.getByText('I hereby swear that this markup is valid 🙏')
    ).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jack')).toBeInTheDocument();
    expect(screen.getByText('Jill')).toBeInTheDocument();
  });

  it('should render a label for the checkbox with the correct htmlFor attribute', () => {
    render(<ValidateMarkup />);
    expect(
      screen.getByLabelText('I hereby swear that this markup is valid 🙏')
    ).toBeInTheDocument();
  });

  it('should render the table in a semnatically correct manner', () => {
    const { container } = render(<ValidateMarkup />);
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('tbody')).toBeInTheDocument();
    expect(container.querySelector('tr')).toBeInTheDocument();
    expect(container.querySelector('th')).toBeInTheDocument();
    expect(container.querySelector('td')).toBeInTheDocument();
  });

  it('should correctly render a form with a checkbox and a submit button', () => {
    const { container } = render(<ValidateMarkup />);
    expect(container.querySelector('form')).toBeInTheDocument();
    expect(
      container.querySelector("input[type='checkbox']")
    ).toBeInTheDocument();
    expect(container.querySelector('button')).toBeInTheDocument();
  });
});
