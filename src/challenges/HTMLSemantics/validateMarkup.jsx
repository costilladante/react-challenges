import React, { useState } from 'react';

export const ValidateMarkup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const submitIsChecked = () => {
    // simulating a submit request
    alert(`isChecked: ${isChecked}`);
  };
  return (
    <form className='container'>
      <h1 className='header'>Validate Markup</h1>
      <div className='validator'>
        <div className='checkbox'>
          <input
            type='checkbox'
            id='validate'
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor='validate'>
            I hereby swear that this markup is valid 🙏
          </label>
        </div>
        <button onClick={submitIsChecked}>Submit</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Jack</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>40</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
