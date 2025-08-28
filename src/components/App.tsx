import { useEffect, useReducer } from "react";
import Header from "./Header";
import "../index.css";
import MainComponent from "./MainComponent";
import type { initialStateType, questionProps } from "../types";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import FinishedButton from "./FinishedButton";
import Footer from "./Footer";
import Timer from "./Timer";

const initialState: initialStateType = {
  questions: [],
  //Loading. error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: 120,
};
const reducer = (state: initialStateType, action: any) => {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer": {
      const question = state.questions[state.index];
      const correct = action.payload === question.correctOption;
      return {
        ...state,
        answer: action.payload,
        points: correct ? state.points + question.points : state.points,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highScore:
          state.highScore > state.points ? state.highScore : state.points,
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: 120

      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining <= 0 ? "finished": "active",
        highScore:
          state.highScore > state.points ? state.highScore : state.points
      }
    default:
      throw new Error("Action Unknown");
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, highScore, secondsRemaining } = state;

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (sum: number, question: questionProps) => sum + question.points,
    0
  );
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/questions");
        const data = await response.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed", payload: err });
      }
    };
    fetchQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <MainComponent>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              index={index}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer dispatch = {dispatch} secondsRemaining={secondsRemaining}/>
              {index > 13 ? (
              <FinishedButton dispatch={dispatch} />
            ) : (
              <NextButton dispatch={dispatch} answer={answer} />
            )}
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </MainComponent>
    </div>
  );
}
export default App;