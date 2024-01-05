# Validate sign-up form - 🟡 Intermediate

In this coding challenge we have provided you with a very basic sign-up form that collects some information form the users. Your task is to add validation to the form to improve the user experience.

You need to make sure that:

1. The first name is not empty.
2. The last name is not empty.
3. Email is a valid email address.
4. Password is at least 8 characters long.
5. Confirm password field has the same value as the password.

Match the above conditions to relevant error messages in Example section and display them below the relevant input fields.

You should update the handleSubmit method to show the alert only if all of the input values are accepted, alternatively display only the relevant error messages.

Errors should be displayed only after the user has pressed the Sign Up button, if there are no errors call console.log(’Form submitted successfully’).

## Directions

- You don’t need to worry about styling your application as we have already done it for you. But if you wish to update the styles, you can use styled-components, inline style or tailwindcss.
- Check out the demo gif to make sure that you understand what you’re meant to build.
- You can use this regex `/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/` for email validation.
- Do not edit the `data-testid` attributes.

## Solution

```javascript
import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } =
      formValues;
    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!firstName.length) {
      newErrors.firstName = 'First name cannot be empty';
      isValid = false;
    }

    if (!lastName.length) {
      newErrors.lastName = 'Last name cannot be empty';
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (password.length <= 7) {
      newErrors.password = 'Password must be greater than 7 characters';
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid='first-name-id'
          type='text'
          name='firstName'
          placeholder='First Name'
          value={formValues.firstName}
          onChange={handleChange}
        />
        <p data-testid='first-name-error-id' className='error'>
          {errors.firstName}
        </p>
        <input
          data-testid='last-name-id'
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={formValues.lastName}
          onChange={handleChange}
        />
        <p data-testid='last-name-error-id' className='error'>
          {errors.lastName}
        </p>
        <input
          data-testid='email-id'
          type='email'
          name='email'
          placeholder='Email Address'
          value={formValues.email}
          onChange={handleChange}
        />
        <p data-testid='email-error-id' className='error'>
          {errors.email}
        </p>
        <input
          data-testid='password-id'
          type='password'
          name='password'
          placeholder='Password'
          value={formValues.password}
          onChange={handleChange}
        />
        <p data-testid='password-error-id' className='error'>
          {errors.password}
        </p>
        <input
          data-testid='confirm-password-id'
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        <p data-testid='confirm-password-error-id' className='error'>
          {errors.confirmPassword}
        </p>
        <button type='submit'>Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px);
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;
```

The component uses two state variables, one for form values and another for error messages. The handleChange function updates form values as the user types, while the validateForm function checks input values against validation rules when the form is submitted.

If the validateForm function returns true (all input values are valid), the handleSubmit function shows an alert indicating successful form submission. Otherwise, error messages are displayed. The form UI is created using input fields, error message placeholders, and a Sign Up button. The form's appearance is styled using styled-components.
