import { useState, useEffect, useRef } from 'react';

const initialTime = 600000;

const initTime = () => {
  const storedTime = localStorage.getItem('time');
  return storedTime ? parseInt(storedTime, 10) : initialTime;
};

const App = () => {
  // const [timerId, setTimerId] = useState(null);
  const timerIdRef = useRef(null);
  const [time, setTime] = useState(initTime);

  const startCountdown = () => {
    // const newTimerId = setInterval(() => {
    timerIdRef.current = setInterval(() => {
      setTime((prevState) => {
        if (prevState <= 0) {
          return initialTime;
        }
        const newTime = prevState - 1000;
        localStorage.setItem('time', newTime);
        return newTime;
      });
    }, 1000);
    // setTimerId(newTimerId);
  };

  const formatTime = () => {
    // minutes = (milliseconds/1000)/60
    const minutes = Math.floor(time / 1000 / 60);
    // (milliseconds/1000)%60
    const seconds = Math.floor((time / 1000) % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };
  useEffect(() => {
    startCountdown();
    return () => {
      // clearInterval(timerId);
      clearInterval(timerIdRef.current);
    };
  }, []);

  return (
    <div>
      <p>{time && formatTime()}</p>
    </div>
  );
};

export default App;
