import { useState } from "react";

const CountDown = (props) => {
  const { timeRemaining, clearTimer } = props;
  return (
    <div className="container">
      <h2>Time Remaining:</h2>
      <div className="row justify-content-center mx-auto w-75">
        <div className="col-sm-3">
          <label htmlFor="hours">Hours</label>
          <input
            value={timeRemaining.hours}
            readOnly
            name="hours"
            type="number"
            className="form-control text-center"
          ></input>
        </div>
        <div className="col-sm-3">
          <label htmlFor="minutes">Minutes</label>
          <input
            value={timeRemaining.minutes}
            readOnly
            name="minutes"
            type="number"
            className="form-control text-center"
          ></input>
        </div>
        <div className="col-sm-3">
          <label htmlFor="seconds">Seconds</label>
          <input
            value={timeRemaining.seconds}
            readOnly
            name="seconds"
            type="number"
            className="form-control text-center"
          ></input>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-sm btn-outline-danger" onClick={clearTimer}>
          Clear Timer
        </button>
      </div>
    </div>
  );
};

export default CountDown;
