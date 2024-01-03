import React, { useState } from 'react';

export const AwesomeComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const submitIsChecked = () => {
    // simulating a submit request
    alert(`isChecked: ${isChecked}`);
  };
  return (
    <div className='container'>
      <p className='header'>Validate Markup</p>
      <div className='validator'>
        <div className='checkbox'>
          <input
            type='checkbox'
            id='validate'
            onChange={() => setIsChecked(!isChecked)}
          />
          <p>I hereby swear that this markup is valid 🙏</p>
        </div>
        <button onClick={submitIsChecked}>Submit</button>
      </div>
      <table>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
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
      </table>
    </div>
  );
};
