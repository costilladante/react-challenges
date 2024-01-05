import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const [form, setForm] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleFieldChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setForm((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  const validateFields = () => {
    let errors = {};
    if (!form.firstName || form.firstName.trim() === '') {
      errors = { ...errors, firstNameError: 'First name cannot be empty' };
    }
    if (!form.lastName || form.lastName.trim() === '') {
      errors = { ...errors, lastNameError: 'Last name cannot be empty' };
    }
    if (
      !form.email ||
      (form.email.trim() === '' &&
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    ) {
      errors = { ...errors, emailError: 'Invalid email address' };
    }
    if (!form.password || form.password.length <= 7) {
      errors = {
        ...errors,
        passwordError: 'Password must be greater than 7 characters',
      };
    }
    if (
      !form.confirmPassword ||
      form.confirmPassword.length < 8 ||
      form.confirmPassword !== form.password
    ) {
      errors = { ...errors, confirmPasswordError: 'Password must match' };
    }
    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully');
    } else {
      console.log('Form Errors');
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
          onChange={handleFieldChange}
        />
        <p data-testid='first-name-error-id' className='error'>
          {formErrors?.firstNameError}
        </p>
        <input
          data-testid='last-name-id'
          type='text'
          name='lastName'
          placeholder='Last Name'
          onChange={handleFieldChange}
        />
        <p data-testid='last-name-error-id' className='error'>
          {formErrors?.lastNameError}
        </p>
        <input
          data-testid='email-id'
          type='email'
          name='email'
          placeholder='Email Address'
          onChange={handleFieldChange}
        />
        <p data-testid='email-error-id' className='error'>
          {formErrors?.emailError}
        </p>
        <input
          data-testid='password-id'
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleFieldChange}
        />
        <p data-testid='password-error-id' className='error'>
          {formErrors?.passwordError}
        </p>
        <input
          data-testid='confirm-password-id'
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          onChange={handleFieldChange}
        />
        <p data-testid='confirm-password-error-id' className='error'>
          {formErrors?.confirmPasswordError}
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
