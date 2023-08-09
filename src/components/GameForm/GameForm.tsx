import { ChangeEvent, FC } from "react";
import classes from "./GameForm.module.scss";
import { Input } from "../UI/Input";
import { IWord } from "../../types/types";
import { Button } from "../UI/Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface GameFormProps {
  word: IWord;
  step: number;
  answer: string;
  isRightAnswer: boolean;
  handlerTimer: () => void;
  handlerSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handlerAnswerChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const GameForm: FC<GameFormProps> = ({
  word,
  step,
  answer,
  isRightAnswer,
  handlerTimer,
  handlerSubmit,
  handlerAnswerChange,
}) => {
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
  };
  return (
    <form className={classes.gameForm}>
      {!isRightAnswer ? (
        <div className={classes.word}>
          <span className={classes.error}>Не верно!</span> Не расстраивайся! Всё
          хорошо! Еще раз повтори термин и перепиши его в ответ!
          <p className={classes.term}>
            Термин: {word.term} <span>|{word.transcription}|</span>
          </p>
        </div>
      ) : (
        <>
          <h3 className={classes.word}>{word.definition}</h3>
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
        </>
      )}
      <div className={classes.answer}>
        <Input
          placeholder="Ответ..."
          onChange={handlerAnswerChange}
          value={answer}
          onPaste={handlePaste}
        />
        <Button onClick={handlerSubmit}>Ответить</Button>
      </div>
    </form>
  );
};
