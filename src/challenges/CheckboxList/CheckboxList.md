# Select all checkboxes

In this coding challenge your task is to finish the CheckboxList component. We have already styled it for you. Your task is to implement the functionality to both:

- Select the individual checkboxes.
- Select all checkboxes when the Select All button is clicked.

## Directions

- You don’t need to worry about styling your application as we have already done it for you. But if you wish to update the styles, you can use styled-components, inline style or tailwindcss.

- Do not edit the data-testid attributes.

# Solution

```javascript
import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleSelectAll = () => {
    setCheckboxes(
      checkboxes.map((checkbox) => ({ ...checkbox, checked: true }))
    );
  };

  return (
    <Container>
      <CheckboxContainer data-testid='checkbox-container'>
        {checkboxes.map((checkbox, index) => (
          <CheckboxLabel key={checkbox.id}>
            <input
              data-testid={`checkbox-${index + 1}`}
              type='checkbox'
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            {checkbox.label}
          </CheckboxLabel>
        ))}
      </CheckboxContainer>
      <SelectAllButton data-testid='button' onClick={handleSelectAll}>
        Select All
      </SelectAllButton>
    </Container>
  );
};

export default CheckboxList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectAllButton = styled.button`
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
`;
```

The CheckboxList component is a functional component that manages an array of checkbox objects using the useState hook. Each checkbox object has an id, a label, and a checked property that indicates whether the checkbox is currently checked or not.

The component renders a container with a CheckboxContainer div and a SelectAllButton button. The CheckboxContainer div maps over the checkboxes state array and renders a CheckboxLabel component for each checkbox object. The CheckboxLabel component renders an `<input>` element with `type="checkbox"` and a label that displays the label property of the checkbox object. The checked prop of the checkbox input is set to the checked property of the checkbox object, and the onChange prop is set to a function that calls the handleCheckboxChange function with the checkbox object's id.

The handleCheckboxChange function takes an id parameter and updates the checkboxes state array by mapping over it and returning a new array where the checkbox object with the matching id has its checked property toggled. This ensures that only the checkbox that was clicked gets updated, and that the rest of the checkboxes remain unchanged.

The handleSelectAll function updates the checkboxes state array by mapping over it and returning a new array where all the checkbox objects have their checked property set to true. This ensures that all the checkboxes are checked when the "Select All" button is clicked.

Finally, the component returns the container with the CheckboxContainer div and the SelectAllButton button. The SelectAllButton button has an onClick prop that calls the handleSelectAll function when clicked.
