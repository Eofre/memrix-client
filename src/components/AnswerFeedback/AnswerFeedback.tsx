import { ChangeEvent, FC } from "react";
import classes from "./AnswerFeedback.module.scss";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

interface AnswerFeedbackProps {
  isRightAnswer: boolean;
  term: string;
  answer: string;
  handlerSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handlerChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AnswerFeedback: FC<AnswerFeedbackProps> = ({
  handlerSubmit,
  isRightAnswer,
  term,
  answer,
  handlerChange,
}) => {
  return (
    <div className={classes.answerFeedback}>
      {isRightAnswer ? (
        <>
          <p>Верно!Молодец!</p>
          <Button onClick={handlerSubmit}>Продолжить!</Button>
        </>
      ) : (
        <>
          <p>Повтори: {term}</p>
          <Input value={answer} onChange={handlerChange} />
          <Button onClick={handlerSubmit}>Ответить</Button>
        </>
      )}
    </div>
  );
};
