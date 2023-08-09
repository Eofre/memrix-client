import { FC } from "react";
import classes from "./ResultGameSprint.module.scss";
import { IAnswerSprint } from "../../types/types";

interface ResultGameSprintProps {
  answers: IAnswerSprint[];
}

export const ResultGameSprint: FC<ResultGameSprintProps> = ({ answers }) => {
  return (
    <div className={classes.resultGameSprint}>
      {answers.map((answer) => (
        <li key={answer.word.term}>
          <p>{answer.word.term}</p>
          <p>{answer.isRight ? <>верно</> : <>Не верно</>}</p>
        </li>
      ))}
    </div>
  );
};
