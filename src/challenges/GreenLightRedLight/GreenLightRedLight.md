# Green light / red light - 🔴Expert

In this coding challenge you’re asked to write a small web game that recreates the iconic green light / red light game from Squid Game. The game will display a box that changes color between green and red. The goal of the game is to get to 15 clicks on the green box within 15 seconds.

You should write all of your game logic in the `GreenLightRedLight` component. By default, it should display a button with the text “Start Game”. This button will be used to start the game.

Once the button is pressed, your app should display a box that changes its color on a random basis. Ideally, it should change no sooner that 1s and no later than 2s.

If the users click on the red box, they failed the game and you should display `Game Over!` message and end the game immediately.

If the users click on the green box, you should increment their score count by 1. If they manage to click the green box 15 times within 15 seconds, they win and you should display `You win!` message.

## Directions

- You can use styled-components, inline style or tailwindcss to style your application.
- This exercise has no tests. Use the Mark as completed button when you’re done.
- Check out the demo gif to make sure that you understand what you’re meant to build.

## Solution

```javascript
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function GreenLightRedLight() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [boxColor, setBoxColor] = useState('red');

  useEffect(() => {
    if (gameStarted && !gameFinished && timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameFinished(true);
    }
  }, [gameStarted, gameFinished, timeLeft]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBoxColor(boxColor === 'red' ? 'green' : 'red');
    }, Math.floor(Math.random() * 1000) + 1000);

    return () => clearInterval(intervalId);
  }, [boxColor]);

  const handleStartGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(15);
    setGameFinished(false);
  };

  const handleBoxClick = () => {
    if (boxColor === 'green' && score === 14) {
      setScore(score + 1);
      setGameFinished(true);
    } else if (boxColor === 'green') {
      setScore(score + 1);
    } else {
      setGameFinished(true);
    }
  };

  return (
    <Wrapper>
      {(!gameStarted || gameFinished) && (
        <Button onClick={handleStartGame}>Start Game</Button>
      )}
      {gameStarted && !gameFinished && (
        <Timer>
          Time left: {timeLeft}s {gameFinished && ' - Game Over!'}
        </Timer>
      )}
      <Scoreboard>Score: {score}</Scoreboard>
      {gameStarted && !gameFinished && (
        <Box onClick={handleBoxClick} color={boxColor}></Box>
      )}
      {gameFinished && (
        <Outcome>{score < 15 ? 'Game Over!' : 'You win!'}</Outcome>
      )}
    </Wrapper>
  );
}

export default GreenLightRedLight;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Scoreboard = styled.h1`
  font-size: 36px;
`;

const Outcome = styled.h2`
  font-size: 28px;
`;

const Timer = styled.p`
  font-size: 24px;
  margin-bottom: 36px;
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
  margin-bottom: 28px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
```
