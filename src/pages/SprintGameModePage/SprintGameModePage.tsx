import { FC, useState } from "react";
import classes from "./SprintGameModePage.module.scss";
import { useParams } from "react-router-dom";
import educationalBlocks from "../../data/educationalBlocks";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface SprintGameModePageProps {}

export const SprintGameModePage: FC<SprintGameModePageProps> = () => {
  const params = useParams();
  const educationalBlock = educationalBlocks[0];
  const words = educationalBlock.words;
  const [step, setStep] = useState(0);
  const word = words[step];
  const handleNextWord = () => {
    if (step < words.length - 1) {
      setStep(step + 1);
    }
  };
  return (
    <section className={classes.sprintGameModePage}>
      <div className={classes.wrapper}>
        <div>{word.definition}</div>
        <div className={classes.timer}>
          <CountdownCircleTimer
            key={step}
            size={110}
            isPlaying
            duration={word.term.length}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            onComplete={handleNextWord}
          >
            {({ remainingTime }) => <div>{remainingTime}</div>}
          </CountdownCircleTimer>
        </div>
      </div>
    </section>
  );
};
