import { useState, useEffect } from 'react';

function ReactionTest() {
  // Write your game here
  const [gameStarted, setGameStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [resultMessage, setResultMessage] = useState('');
  const [timerId, setTimerId] = useState(null);
  const [isBoxAvailable, setBoxAvailable] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const handleBoxClick = () => {
    if (!isBoxAvailable) {
      setResultMessage('You clicked too early!');
    } else {
      setResultMessage(`You took ${Date.now() - startTime}ms!`);
    }
    setGameStarted(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setResultMessage('');
    setBoxAvailable(false);

    const timerDelay = Math.floor(Math.random() * 6 + 1) * 1000;
    const timerId = setTimeout(() => {
      setBoxAvailable(true);
      setStartTime(Date.now());
    }, timerDelay);
    setTimerId(timerId);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {gameStarted && (
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: isBoxAvailable ? 'green' : 'red',
          }}
          onClick={handleBoxClick}
        />
      )}
      {!gameStarted && (
        <button
          style={{
            padding: '8px 16px',
            maxWidth: '160px',
            backgroundColor: '#222222',
            color: 'white',
          }}
          onClick={handleStartGame}
        >
          Start Game
        </button>
      )}
      {!gameStarted && resultMessage && <p>{resultMessage}</p>}
    </div>
  );
}

export default ReactionTest;
