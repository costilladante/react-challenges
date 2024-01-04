import React, { useState } from 'react';

// Challenge: Select all checkboxes

// In this coding challenge your task is to finish the CheckboxList component. We have already styled it for you. Your task is to implement the functionality to both:
// Select the individual checkboxes.
// Select all checkboxes when the Select All button is clicked.

// Directions
// You don’t need to worry about styling your application as we have already done it for you. But if you wish to update the styles, you can use styled-components, inline style or tailwindcss.
// Do not edit the data-testid attributes.

const CheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);

  const onChange = (itemId) => {
    setCheckboxes((prevState) => {
      const newState = prevState.map((c) => {
        if (c.id === itemId) {
          return { ...c, checked: !c.checked };
        } else return c;
      });
      return newState;
    });
  };

  const handleSelectAll = () => {
    setCheckboxes((prevState) => {
      const newState = prevState.map((c) => {
        return { ...c, checked: true };
      });
      return newState;
    });
  };

  return (
    <div>
      <div data-testid='checkbox-container'>
        {checkboxes.map((checkbox, index) => (
          <label key={checkbox.id}>
            <input
              data-testid={`checkbox-${index + 1}`}
              type='checkbox'
              checked={checkbox.checked}
              onChange={() => {
                onChange(checkbox.id);
              }}
            />
            {checkbox.label}
          </label>
        ))}
      </div>
      <button data-testid='button' onClick={handleSelectAll}>
        Select All
      </button>
    </div>
  );
};

export default CheckboxList;
