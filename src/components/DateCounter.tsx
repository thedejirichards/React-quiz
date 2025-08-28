/*

import { useReducer } from "react";
import type { actionType, initialValueType } from "./types";






const initialValue: initialValueType = {count: 0, step: 1}
const reducer = (state:initialValueType, action:actionType) => {
  console.log(state, action)
  switch (action.type){
    case "dec":
      return {...state, count:state.count + (action.payload || 1)}
    case "inc":
      return {...state, count:state.count + (action.payload || 1)}
    case "setCount":
      return {...state, count:action.payload}
    case "stepper":
      return {...state, step:action.payload} 
    case "reset":
      return initialValue
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const {count, step} = state

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type: "dec", payload: -2})
  };

  const inc = function () {
    dispatch({type: "inc", payload: 2})
  };

  const defineCount = function (e:React.ChangeEvent<HTMLInputElement>) {
    dispatch({type: "setCount", payload: Number(e.target.value)});
  };

  const defineStep = function (e:React.ChangeEvent<HTMLInputElement>) {
    dispatch({type:"stepper", payload: Number(e.target.value)});
  };

  const reset = function () {
    dispatch({type: "reset"})
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;


*/