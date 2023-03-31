import { useState } from "react";
import CountDown from "../components/CountDown";
import SetTimer from "../components/SetTimer";
import bell from "./assets/bell.wav";

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const startTimer = (hours, minutes, seconds) => {
    setIsRunning(true);
    setTimeRemaining((prevState) => ({
      ...prevState,
      hours,
      minutes,
      seconds,
    }));

    let interval = setInterval(() => {
      setTimeRemaining((prevState) => {
        let totalSecondsRemaining = convertToSeconds(prevState);
        totalSecondsRemaining--;

        if (totalSecondsRemaining <= 0) {
          ringBell();
          clearTimer(interval);
        }

        return {
          ...prevState,
          hours: Math.floor(totalSecondsRemaining / 3600),
          minutes: Math.floor((totalSecondsRemaining % 3600) / 60),
          seconds: totalSecondsRemaining % 60,
        };
      });
    }, 1000);
  };

  const clearTimer = (interval) => {
    setIsRunning(false);
    clearInterval(interval);
  };

  const convertToSeconds = (time) => {
    const { hours, minutes, seconds } = time;
    return hours * 60 * 60 + minutes * 60 + seconds;
  };

  const ringBell = () => {
    let sound = new Audio(bell);
    sound.play();
  };

  return (
    <div className="container text-center">
      {isRunning ? (
        <CountDown clearTimer={clearTimer} timeRemaining={timeRemaining} />
      ) : (
        <SetTimer startTimer={startTimer} />
      )}
    </div>
  );
};

export default App;
