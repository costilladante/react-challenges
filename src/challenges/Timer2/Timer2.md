# Timer II - 🔴 Expert

Write a component App that implements a timer. The component should display the elapsed time in minutes and seconds, formatted as "MM:SS". The timer should start at 10 minutes and count down every second. When the timer runs out restart it from 10 minutes again. Persist the timer status in the local storage, so that when the user closes the page and comes back to it 5 minutes later, the timer picks up where it stopped.

## Solution

```javascript
import React, { useState, useEffect } from 'react';

const INITIAL_COUNTDOWN = 600;

const handleInitialState = () => {
  const storedTime = localStorage.getItem('elapsedTime');
  if (storedTime) {
    return parseInt(storedTime);
  }
  return INITIAL_COUNTDOWN;
};

const App = () => {
  const [elapsedTime, setElapsedTime] = useState(handleInitialState());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => {
        if (prevElapsedTime === 0) {
          return INITIAL_COUNTDOWN;
        }
        localStorage.setItem('elapsedTime', prevElapsedTime - 1);
        return prevElapsedTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div>
      {`${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`}
    </div>
  );
};

export default App;
```

The provided solution uses the useState and useEffect hooks to manage the elapsed time state and start the timer interval, respectively. The INITIAL_COUNTDOWN constant is set to 600, representing 10 minutes in seconds.

To retrieve the timer status from local storage, the handleInitialState function is defined. This function checks for a previously saved elapsed time value in local storage, if any. If there is a saved value, it's returned as an integer, else the INITIAL_COUNTDOWN constant is used as the default value.

The App component is then defined with the useState hook to store the elapsed time as state. The useEffect hook is used to start the timer interval when the component mounts. The interval function is defined to decrement the elapsed time by 1 second using setElapsedTime, and to update the local storage with localStorage.setItem each time the elapsed time changes. If the elapsed time reaches 0, it's reset to the initial countdown value.

To format the elapsed time, the minutes and seconds variables are calculated based on the elapsed time state using simple arithmetic. Finally, the formatted time is rendered as a string in the div element, with padStart used to add leading zeros for single-digit minutes and seconds.

When the component unmounts, the interval is cleared to avoid memory leaks.
