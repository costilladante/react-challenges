import { useState, useEffect } from 'react';

function GreenLightRedLight() {
  const [gameInProgress, setGameInProgress] = useState(false);

  const [countdownTimerId, setCountdownTimerId] = useState(null);
  const [gameTime, setGameTime] = useState(null);
  const [boxTimerId, setBoxTimerId] = useState(null);
  const [boxTimeEnd, setBoxTimeEnd] = useState(null);

  const [boxClickable, setBoxClickable] = useState(true);
  const [gameResult, setGameResult] = useState('');
  const [score, setScore] = useState(0);

  const startGame = () => {
    if (gameInProgress) {
      return;
    }
    setScore(0);
    setGameInProgress(true);
    setGameTime(15);
    setBoxTimeOut();
    setGameInterval();
  };

  const setGameInterval = () => {
    if (countdownTimerId) {
      clearInterval(countdownTimerId);
    }
    const newIntervalId = setInterval(() => {
      setGameTime((prevState) => {
        return prevState - 1;
      });
    }, 1000);
    setCountdownTimerId(newIntervalId);
  };

  const setBoxTimeOut = () => {
    if (boxTimerId) {
      clearTimeout(boxTimerId);
    }
    setBoxClickable((prevState) => !prevState);
    const timeOutDuration = Math.random() * 1000 + 1000;
    const newBoxTimerId = setTimeout(() => {
      setBoxTimeOut();
    }, timeOutDuration);
    setBoxTimeEnd(Date.now() + timeOutDuration);
    setBoxTimerId(newBoxTimerId);
  };

  const handleBoxClick = () => {
    if (boxClickable) {
      setScore((prevState) => {
        return prevState + 1;
      });
    } else {
      // game over
      endGame(false);
    }
  };

  const endGame = (isGameVictory) => {
    setGameInProgress(false);
    if (countdownTimerId) {
      clearInterval(countdownTimerId);
    }
    if (boxTimerId) {
      clearTimeout(boxTimerId);
    }
    if (isGameVictory) {
      setGameResult('You Win!');
    } else {
      setGameResult('Game Over!');
    }
  };

  useEffect(() => {
    if (gameInProgress && gameTime <= 0) {
      endGame(false);
    } else if (gameInProgress && gameTime > 0) {
    }
  }, [gameInProgress, gameTime]);

  useEffect(() => {
    if (gameInProgress) {
      if (boxTimeEnd === null && Date.now() >= boxTimeEnd) {
        setBoxTimeOut();
      }
    }
  }, [boxTimeEnd]);

  useEffect(() => {
    if (score >= 15 && gameTime > 0) {
      clearInterval(countdownTimerId);
      endGame(true);
    }
  }, [score]);

  useEffect(() => {
    return () => {
      if (countdownTimerId) {
        clearInterval(countdownTimerId);
      }
      if (boxTimerId) {
        clearTimeout(boxTimerId);
      }
    };
  }, []);

  // Write your game here
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {gameInProgress && <p>Time Left: {gameTime}s </p>}
      {!gameInProgress && (
        <button
          style={{
            backgroundColor: '#333',
            color: 'white',
            maxWidth: '160px',
            padding: '16px 8px',
            borderRadius: '12px',
          }}
          onClick={startGame}
        >
          Start Game
        </button>
      )}
      <b style={{ fontSize: '26px' }}> Score: {score}</b>
      {gameInProgress && (
        <div
          id='box'
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: boxClickable ? 'green' : 'red',
          }}
          onClick={handleBoxClick}
        />
      )}
      {gameResult && <b style={{ fontSize: '26px' }}> {gameResult}</b>}
    </div>
  );
}

export default GreenLightRedLight;
