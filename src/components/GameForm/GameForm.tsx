import { ChangeEvent, FC } from "react";
import classes from "./GameForm.module.scss";
import { Input } from "../UI/Input";
import { IWord } from "../../types/types";
import { Button } from "../UI/Button";

interface GameFormProps {
  word: IWord;
  answer: string;
  onClickSendAnswer: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onChangeAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const GameForm: FC<GameFormProps> = ({
  word,
  answer,
  onClickSendAnswer,
  onChangeAnswer,
}) => {
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
  };
  return (
    <form className={classes.gameForm}>
      <h3 className={classes.word}>{word.definition}</h3>
      {/* <CountdownCircleTimer
        key={step}
        size={130}
        isPlaying
        duration={word.term.length}
        colors={["#debe49", "#FF5B5B"]}
        colorsTime={[7, 0]}
        onComplete={handlerTimer}
      >
        {({ remainingTime }) => <div>{remainingTime}</div>}
      </CountdownCircleTimer> */}
      <div className={classes.answer}>
        <Input
          placeholder="Ответ..."
          onChange={onChangeAnswer}
          value={answer}
          onPaste={handlePaste}
        />
        <Button onClick={onClickSendAnswer}>Ответить</Button>
      </div>
    </form>
  );
};
