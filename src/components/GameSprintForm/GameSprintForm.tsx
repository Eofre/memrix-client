import { ChangeEvent, FC } from "react";
import classes from "./GameSprintForm.module.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { AnswerForm } from "../AnswerForm";
import { IWord } from "../../types/types";

interface GameSprintFormProps {
  word: IWord;
  step: number;
  answer: string;
  handlerClickSendAnswer: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handlerChangeAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
  handlerTimer: () => void;
}

export const GameSprintForm: FC<GameSprintFormProps> = ({
  word,
  step,
  answer,
  handlerTimer,
  handlerChangeAnswer,
  handlerClickSendAnswer,
}) => {
  return (
    <div className={classes.form}>
      <h3>{word.definition}</h3>
      <CountdownCircleTimer
        key={step}
        size={130}
        isPlaying
        duration={word.term.length}
        colors={["#debe49", "#FF5B5B"]}
        colorsTime={[7, 0]}
        onComplete={handlerTimer}
      >
        {({ remainingTime }) => <div>{remainingTime}</div>}
      </CountdownCircleTimer>
      <AnswerForm
        answer={answer}
        onClickSendAnswer={handlerClickSendAnswer}
        onChangeAnswer={handlerChangeAnswer}
      />
    </div>
  );
};
