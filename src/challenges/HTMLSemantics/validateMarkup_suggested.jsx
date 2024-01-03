import React, { useState } from 'react';

export const AwesomeComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const submitIsChecked = (event) => {
    event.preventDefault();
    // simulating a submit request
    alert(`isChecked: ${isChecked}`);
  };
  return (
    <div className='container'>
      <h2 className='header'>Validate Markup</h2>
      <form onSubmit={submitIsChecked} className='validator'>
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
        <button>Submit</button>
      </form>
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
    </div>
  );
};
