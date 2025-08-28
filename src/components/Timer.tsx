import { useEffect } from "react";
import type { TimerProp } from "../types";

function Timer({ dispatch, secondsRemaining }: TimerProp) {
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => clearInterval(id)
  }, [dispatch]);

  const positiveTimeInSec = secondsRemaining > 0 ? secondsRemaining : 0
  const minuteValue = Math.floor(positiveTimeInSec / 60);
  const secondsValue = positiveTimeInSec - minuteValue * 60;
  return (
    <div className="timer">
      {minuteValue < 10 ? `0` + minuteValue : minuteValue} :
      {secondsValue < 10 ? `0` + secondsValue : secondsValue}
    </div>
  );
}

export default Timer;
