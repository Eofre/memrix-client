import { ChangeEvent, FC } from "react";
import classes from "./GameSprintFeedbackForm.module.scss";
import { AnswerForm } from "../AnswerForm";
import { IWord } from "../../types/types";

interface GameSprintFeedbackFormProps {
  word: IWord;
  answer: string;
  handlerClickSendAnswer: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handlerChangeAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const GameSprintFeedbackForm: FC<GameSprintFeedbackFormProps> = ({
  word,
  answer,
  handlerChangeAnswer,
  handlerClickSendAnswer,
}) => {
  return (
    <div className={classes.feedback}>
      <h3>{word.term}</h3>
      <AnswerForm
        answer={answer}
        onClickSendAnswer={handlerClickSendAnswer}
        onChangeAnswer={handlerChangeAnswer}
      />
    </div>
  );
};
