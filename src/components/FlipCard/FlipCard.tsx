import { FC } from "react";
import classes from "./FlipCard.module.scss";
import { IWord } from "../../types/types";
import ReactCardFlip from "react-card-flip";
import { IconButton } from "../UI/IconButton";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface FlipCardProps {
  word: IWord;
  numberOfWords: number;
  isFlipped: boolean;
  isDisabledButtonPrevious: boolean;
  isDisabledButtonNext: boolean;
  cardNumber: number;
  nextCard: () => void;
  previousCard: () => void;
  flippedCard: () => void;
}

export const FlipCard: FC<FlipCardProps> = ({
  word,
  numberOfWords,
  isDisabledButtonPrevious,
  isDisabledButtonNext,
  isFlipped,
  cardNumber,
  nextCard,
  previousCard,
  flippedCard,
}) => {
  const handlerClickNext = () => nextCard();
  const handlerClickPrevious = () => previousCard();
  const handlerClickFlipped = () => flippedCard();
  // const isTranscription = word.transcription !== "" || word.transcription;
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className={classes.card} onClick={handlerClickFlipped}>
        <div className={classes.top}>
          {cardNumber} / {numberOfWords}
        </div>
        <div className={classes.word}>
          <div className={classes.term}>{word.term}</div>
          <span className={classes.transcription}>|{word.transcription}|</span>
        </div>
        <div className={classes.btns}>
          {isDisabledButtonPrevious ? (
            <IconButton icon={<BiLeftArrow />} disabled />
          ) : (
            <IconButton icon={<BiLeftArrow />} onClick={handlerClickPrevious} />
          )}
          {isDisabledButtonNext ? (
            <IconButton icon={<BiRightArrow />} disabled />
          ) : (
            <IconButton icon={<BiRightArrow />} onClick={handlerClickNext} />
          )}
        </div>
      </div>

      <div className={classes.card} onClick={handlerClickFlipped}>
        <div className={classes.top}>
          {cardNumber} / {numberOfWords}
        </div>
        <div className={classes.word}>{word.definition}</div>
        <div className={classes.btns}>
          {isDisabledButtonPrevious ? (
            <IconButton icon={<BiLeftArrow />} disabled />
          ) : (
            <IconButton icon={<BiLeftArrow />} onClick={handlerClickPrevious} />
          )}
          {isDisabledButtonNext ? (
            <IconButton icon={<BiRightArrow />} disabled />
          ) : (
            <IconButton icon={<BiRightArrow />} onClick={handlerClickNext} />
          )}
        </div>
      </div>
    </ReactCardFlip>
  );
};
