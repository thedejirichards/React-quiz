import type { ProgressProps } from "../types"

function Progress({index, numQuestions, points, maxPossiblePoints,answer}: ProgressProps) {
    const numberValueIsAnswer = Number(answer !== null)
    return (
        <header className="header">
            <progress max={numQuestions} value={index+ numberValueIsAnswer}></progress>
            <p>Question <strong>{index+1}</strong>/ {numQuestions}</p>
            <p><strong>{points}</strong>/ {maxPossiblePoints}</p>
        </header>
    )
}

export default Progress
