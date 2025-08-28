import type { FinishedButtonProp } from "../types";

function FinishedButton({dispatch}: FinishedButtonProp) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "finishQuiz" })}
    >
      Finish
    </button>
  );
}

export default FinishedButton;
