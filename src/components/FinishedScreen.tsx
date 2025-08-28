import type { FinishedScreenProps } from "../types";

function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }: FinishedScreenProps) {
  const percentValue = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentValue === 100) emoji = "🏅";
  if (percentValue >= 80 && percentValue < 100) emoji = "🎉";
  if (percentValue >= 50 && percentValue < 80) emoji = "😃";
  if (percentValue >= 0 && percentValue < 50) emoji = "🤔";
  if (percentValue === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        Your score <strong>{points}</strong> out of{" "}
        <strong>{maxPossiblePoints}</strong> which is {Math.ceil(percentValue)}%
      </p>
      <p className="highscore">(High score: {highScore})</p>
      <button className="btn btn-ui" onClick={()=>dispatch({type: "restart"})}>Restart Quiz</button>
    </>
  );
}

export default FinishedScreen;
