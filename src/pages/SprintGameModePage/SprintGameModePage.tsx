import { ChangeEvent, FC, useState } from "react";
import classes from "./SprintGameModePage.module.scss";
import { useParams } from "react-router-dom";
import educationalBlocks from "../../data/educationalBlocks";
import { GameForm } from "../../components/GameForm";
import { ResultGameSprint } from "../../components/ResultGameSprint";

interface SprintGameModePageProps {}

export const SprintGameModePage: FC<SprintGameModePageProps> = () => {
  const params = useParams();
  const educationalBlock = educationalBlocks[0];
  const words = educationalBlock.words;
  const [step, setStep] = useState(0);
  const word = words[step];
  const [answer, setAnswer] = useState("");
  const [isRightAnswer, setIsRightAnswer] = useState(true);
  const [isFinish, setIsFinish] = useState(false);

  const handlerTimer = () => {
    setIsRightAnswer(false);
  };

  const isMatchingTerm =
    answer.toLowerCase().trim() === word.term.toLowerCase().trim();
  const isNotLastStep = step < words.length - 1;

  const handlerSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (isMatchingTerm) {
      if (isNotLastStep) {
        setIsRightAnswer(true);
        setAnswer("");
        setStep(step + 1);
      } else {
        setIsRightAnswer(true);
        setAnswer("");
        setIsFinish(true);
      }
    } else {
      console.log("Не верно");
      setIsRightAnswer(false);
      setAnswer("");
    }
  };

  const handlerAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <section className={classes.sprintGameModePage}>
      <div className={classes.wrapper}>
        {isFinish ? (
          <ResultGameSprint />
        ) : (
          <GameForm
            step={step}
            word={word}
            isRightAnswer={isRightAnswer}
            answer={answer}
            handlerTimer={handlerTimer}
            handlerSubmit={handlerSubmit}
            handlerAnswerChange={handlerAnswerChange}
          />
        )}
      </div>
    </section>
  );
};
