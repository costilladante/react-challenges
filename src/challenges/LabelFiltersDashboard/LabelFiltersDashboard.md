# Label filters dashboard - 🟡 Intermediate

Your teammate at Google has just unexpectedly gotten sick and he will not be able to finish his work before the deadline. You’ve been asked to take over his task where he left off and finish it.

The task is to finish implementing the component LabelFilter; an interactive dashboard with filters displaying different types of animals.

Luckily all of the designs have already been nearly implemented, all you have to do is to finish building out the filtering logic.

Changes needed:

1. When a label is selected it should have the following styles applied to it: color of #fff and background color of #333.
2. When a class label is selected only the animal belonging to the selected class should be displayed. So when the user clicks on birds, only the birds tiles should be visible.
3. When more than one label are selected then animals belonging to both of those classes should be displayed. So when the user clicks on birds and mammals, both the birds and the mammal tiles should be visible.

## Directions

- You don’t need to worry about styling your application as we have already done it for you. But if you wish to update the styles, you can use styled-components, inline style or tailwindcss.
- Check out the demo gif to make sure that you understand what you’re meant to build.
- Do not edit the data-testid attributes.
- Do not edit the animalData object.

## Solution

```javascript
import React, { useState } from 'react';
import styled from 'styled-components';

const animalData = [
  { name: 'Eagle', class: 'Birds' },
  { name: 'Penguin', class: 'Birds' },
  { name: 'Parrot', class: 'Birds' },
  { name: 'Lion', class: 'Mammals' },
  { name: 'Tiger', class: 'Mammals' },
  { name: 'Elephant', class: 'Mammals' },
  { name: 'Cobra', class: 'Reptiles' },
  { name: 'Lizard', class: 'Reptiles' },
  { name: 'Tortoise', class: 'Reptiles' },
  { name: 'Salmon', class: 'Fish' },
  { name: 'Shark', class: 'Fish' },
  { name: 'Trout', class: 'Fish' },
];

const LabelFilter = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const toggleClass = (animalClass) => {
    if (selectedClasses.includes(animalClass)) {
      setSelectedClasses(selectedClasses.filter((c) => c !== animalClass));
    } else {
      setSelectedClasses([...selectedClasses, animalClass]);
    }
  };

  const animalClasses = Array.from(
    new Set(animalData.map((animal) => animal.class))
  );

  const filteredAnimals = animalData.filter((animal) =>
    selectedClasses.length === 0 ? true : selectedClasses.includes(animal.class)
  );

  return (
    <Wrapper>
      <div data-testid='labels-wrapper-id' className='label-container'>
        {animalClasses.map((animalClass) => (
          <div
            data-testid='label-id'
            className='label'
            key={animalClass}
            style={{
              backgroundColor: selectedClasses.includes(animalClass) && '#333',
              color: selectedClasses.includes(animalClass) && '#fff',
            }}
            onClick={() => toggleClass(animalClass)}
          >
            {animalClass}
          </div>
        ))}
      </div>
      <div data-testid='tile-container-id' className='tile-container'>
        {filteredAnimals.map((animal) => (
          <div data-testid='animal-tile-id' className='tile' key={animal.name}>
            {animal.name}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default LabelFilter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  margin: 24px;
  gap: 24px;

  .label-container {
    display: flex;
    flex-direction: row;
    gap: 12px;

    .label {
      background-color: #fff;
      color: #333;
      border: 1px solid #333;
      border-radius: 4px;
      margin-bottom: 8px;
      padding: 6px 12px;
      cursor: pointer;
      transition: 0.1s ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .tile-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;

    .tile {
      background-color: #333;
      color: #fff;
      padding: 12px;
      border-radius: 4px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      min-width: 120px;
    }
  }
`;
```

The LabelFilter component is a React component that displays animal classes as labels and animal tiles in a grid. It uses React hooks, styled-components, and filtering logic to create an interactive dashboard with filters for different types of animals.

animalData contains information about animals, and LabelFilter manages the state of selected animal classes using the useState hook. The toggleClass helper function updates the state when a label is clicked. Unique animal classes are derived from animalData, and the animals to be displayed are determined by the current state.

The component renders two sections: a label container and a tile container. Labels are created for each animal class, and their styles change based on the selection. Animal tiles are generated from the filtered list of animals. The Wrapper styled-component contains the CSS for the entire component, including the grid layout for the tiles.

When a user clicks on a label, the component updates the state and re-renders to display the tiles based on the new filter settings.
