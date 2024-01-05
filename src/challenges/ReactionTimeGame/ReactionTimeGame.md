# Reaction time game

In this coding challenge you’re asked to write a small web game that tests the user’s reaction time. The game will initially display a red box, the goal is to click on the box as soon the box changes color from red to green. The game should display the reaction time in ms.

You should write all of your game logic in the ReactionTest component. By default, it should display a button with the text “Start Game”. This button will be used to start the game.

Once the button is pressed, your app should display a red box for anywhere between 1 and 6s.

If the users click on the red box, they failed the game and you should display You clicked too early! message and end the game immediately.

If the users click on the green box, they finished the game successfully and you should display You took <time>ms! the message, where time indicates the time it took them to react in milliseconds.

## Directions

- You can use styled-components, inline style or tailwindcss to style your application.
- This exercise has no tests. Use the Mark as completed button when you’re done.
- Check out the demo gif to make sure that you understand what you’re meant to build.

## Solution

```javascript
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

function ReactionTest() {
  const [startTime, setStartTime] = useState(null);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [countdownRunning, setCountdownRunning] = useState(false);
  const [message, setMessage] = useState(null);
  const timerRef = useRef(null);

  const startGame = () => {
    setMessage(null);
    setCountdownRunning(true);

    timerRef.current = setTimeout(() => {
      setCountdownRunning(false);
      setCountdownFinished(true);
      setStartTime(Date.now());
    }, Math.random() * 5000 + 1000);
  };

  const handleClick = () => {
    setMessage(`You took ${Date.now() - startTime}ms!`);
    setCountdownFinished(false);
    setStartTime(null);
  };

  const handleEarlyClick = () => {
    setMessage('You clicked too early!');
    setCountdownFinished(false);
    setCountdownRunning(false);
    setStartTime(null);
    clearTimeout(timerRef.current);
  };

  return (
    <Wrapper>
      {!countdownFinished && !countdownRunning && (
        <Button onClick={startGame}>Start Game</Button>
      )}
      {countdownRunning && <RedBox onClick={handleEarlyClick}></RedBox>}
      {countdownFinished && <GreenBox onClick={handleClick}></GreenBox>}
      <h2>{message}</h2>
    </Wrapper>
  );
}

export default ReactionTest;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const RedBox = styled(Box)`
  background-color: #e74c3c;
`;

const GreenBox = styled(Box)`
  background-color: #2ecc71;
`;
```

The solution code is a React component named ReactionTest. It defines several state variables using the useState hook:

- `startTime`: A variable to store the timestamp when the user clicks the green box.
- `countdownFinished`: A boolean variable indicating whether the countdown has finished and the green box is visible for the user to click.
- `countdownRunning`: A boolean variable indicating whether the countdown (i.e. the red box) is currently being displayed.
- `message`: A variable to store the message to be displayed to the user (either "You clicked too early!" or "You took [time]ms!").

The component also uses the useRef hook to create a reference to a timer that is set using the setTimeout function.

The startGame function is called when the user clicks the "Start Game" button. It sets the countdownRunning state to true, clears any previous messages, and starts a countdown by setting a timer using setTimeout. The timer will call a function that sets the countdownFinished state to true, sets the startTime state to the current timestamp, and sets the countdownRunning state to false.

The handleClick function is called when the user clicks the green box. It calculates the reaction time by subtracting the startTime from the current timestamp, sets the message state to display the reaction time, and sets the countdownFinished state to false.

The handleEarlyClick function is called when the user clicks the red box. It displays the message "You clicked too early!", sets the countdownFinished state to false, sets the countdownRunning state to false, clears the timer using clearTimeout, and resets the startTime state to null.

The component returns a styled div with three possible components to display:

- If the `countdownFinished` and `countdownRunning` states are both false, it displays the "Start Game" button.
- If the `countdownRunning` state is true, it displays the red box, which the user should not click.
- If the `countdownFinished` state is true, it displays the green box, which the user should click.

Finally, the component also displays the message state in an h2 tag to inform the user of their result after the game is finished.
