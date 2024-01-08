# useTheme - 🟡 Intermediate

Write a custom hook called useTheme that holds the current value of the theme which can be either “light” or “dark”. The hook should be able to store and manage the information on whether the page should be using light or dark mode. It should return an object with two properties. Please see the example below for the required return object.

## Directions

- Use strings light and dark to track the current theme.
- The default theme should be light.
- You do not need to edit the App component. Tests will be scoring only the useTheme hook.

### Example

```javascript
{
  theme: 'light' | 'dark',
  toggleTheme: function
}
```

## Solution

```javascript
import { useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        height: '100vh',
        transition: '0.3s ease-in',
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
```

In this case, useState is used to manage the theme of the application. It is initialized with the value of 'light', which means that the default theme will be light. The useState hook returns an array with two elements, the first is the current state (in this case, the theme), and the second is a function to update the state (in this case, setTheme).

The custom hook useTheme then defines the toggleTheme function, which is used to switch between the light and dark themes. The toggleTheme function calls setTheme with either 'light' or 'dark' depending on the current value of the theme. If the theme is 'light', the theme will be set to 'dark', and if it is 'dark', it will be set to light.
