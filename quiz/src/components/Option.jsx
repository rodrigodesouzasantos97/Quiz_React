import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, answer, selectOption, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      <p
        className={`option ${quizState.answerSelected && option === answer ? "correct" : ""}
        ${quizState.answerSelected && option !== answer ? "wrong" : ""}
        ${hide ? "hide" : ""}`}
        onClick={() => selectOption()}
      >
        {option}
      </p>
    </>
  );
};

export default Option;
