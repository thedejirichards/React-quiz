export type actionType = {
  type: string;
  payload?: number;
};

export type initialValueType = {
  count: number;
  step: number;
};

export type questionProps = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id: string;
};

export type initialStateType = {
  questions: questionProps[];
  status: string;
  index: number;
  answer: null | number;
  points: number;
  highScore: number;
  secondsRemaining: number;
};

export type Action =
  | { type: "dataRecieved" }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finishQuiz" }
  | { type: "restart" }
  | { type: "tick" }

export type StartScreenProp = {
  numQuestions: number;
  dispatch: (action: Action) => void;
};

export type QuestionProps = {
  question: questionProps;
  answer: null | number;
  dispatch: (action: Action) => void;
};

export type OptionProps = {
  question: questionProps;
  answer: null | number;
  dispatch: (action: Action) => void;
};

export type NextButtonProp = {
  dispatch: (action: Action) => void;
  answer: null | number;
};
export type FinishedButtonProp = {
  dispatch: (action: Action) => void;
};

export type ProgressProps = {
  numQuestions: number;
  index: number;
  points: number;
  maxPossiblePoints: number;
  answer: null|number;
};

export type FinishedScreenProps = {
  points: number;
  maxPossiblePoints: number;
  highScore: number
  dispatch: (action: Action) => void;
};



export type TimerProp = {
  dispatch: (action: Action) => void;
  secondsRemaining: number
}