import { useState } from "react";

const SetTimer = (props) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateHours = (event) => {
    setTime((prevState) => ({
      ...prevState,
      hours: parseInt(event.target.value),
    }));
  };
  const updateMinutes = (event) => {
    setTime((prevState) => ({
      ...prevState,
      minutes: parseInt(event.target.value),
    }));
  };
  const updateSeconds = (event) => {
    setTime((prevState) => ({
      ...prevState,
      seconds: parseInt(event.target.value),
    }));
  };
  const { startTimer } = props;
  return (
    <div className="container mx-auto w-75">
      <h2>Set Your Timer</h2>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="hours" className="form-label">
            Hours
          </label>
          <input
            onChange={updateHours}
            type="number"
            className="form-control text-center"
            name="hours"
            placeholder="0"
            min="0"
          />
        </div>
        <div className="col-sm">
          <label htmlFor="minutes" className="form-label">
            Minutes
          </label>
          <input
            onChange={updateMinutes}
            type="number"
            className="form-control text-center"
            name="minutes"
            placeholder="0"
            min="0"
          />
        </div>
        <div className="col-sm">
          <label htmlFor="seconds" className="form-label">
            Seconds
          </label>
          <input
            onChange={updateSeconds}
            type="number"
            className="form-control text-center"
            name="seconds"
            placeholder="0"
            min="0"
          />
        </div>
        <div className="col-sm d-grid gap-2">
          <button
            className="btn btn-secondary"
            onClick={() => startTimer(time.hours, time.minutes, time.seconds)}
          >
            Start Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetTimer;
