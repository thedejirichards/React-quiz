import type { NextButtonProp } from "../types";

function NextButton({ dispatch, answer }: NextButtonProp) {
  if (answer === null) return;
  return (
    <>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Click me
      </button>
    </>
  );
}

export default NextButton;
