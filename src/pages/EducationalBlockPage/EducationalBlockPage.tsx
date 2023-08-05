import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { FlipCard } from "../../components/FlipCard";
import { Button } from "../../components/UI/Button";
import { IWord } from "../../types/types";
import classes from "./EducationalBlockPage.module.scss";
import educationalBlocks from "../../data/educationalBlocks";
import GameModePanel from "../../components/GameModePanel/GameModePanel";
import gameModes from "../../data/gameModes";
import { MyLink } from "../../components/UI/MyLink";

interface EducationalBlockPageProps {}

export const EducationalBlockPage: FC<EducationalBlockPageProps> = () => {
  const params = useParams();
  const educationalBlock = educationalBlocks[0];

  const words: IWord[] = educationalBlock.words;

  const [wordIndex, setWordIndex] = useState(0);
  const numberOfWords: number = words.length;
  const currentWord: IWord = words[wordIndex];

  const [showCard, setShowCard] = useState<boolean>(true);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isShowWords, setIsShowWords] = useState(false);
  const isDisabledButtonNext: boolean = wordIndex === words.length - 1;
  const isDisabledButtonPrevious: boolean = wordIndex === 0;

  // useEffect(() => {
  //   document.title = `${educationalBlock.name}`;
  // }, []);

  function flippedCard() {
    setIsFlipped(!isFlipped);
  }

  function nextCard() {
    if (wordIndex !== words.length - 1) {
      setWordIndex(wordIndex + 1);
      setShowCard(false);

      setTimeout(() => {
        setIsFlipped(false);
        setShowCard(true);
      }, 460);
    }
  }

  function previousCard() {
    if (wordIndex !== 0) {
      setWordIndex(wordIndex - 1);
      setShowCard(false);

      setTimeout(() => {
        setIsFlipped(false);
        setShowCard(true);
      }, 460);
    }
  }

  //handler

  const handlerClickShowWords = () => {
    setIsShowWords(!isShowWords);
  };

  return (
    <section>
      <Container maxWidth="700px">
        <div className={classes.educationalBlockPage}>
          <>
            <div className={classes.top}>
              <h2>{educationalBlock.name}</h2>
              <div>
                <MyLink variant="primary" href="/modules/1/games">
                  Режимы игры
                </MyLink>
              </div>
              {/* <button>
                <FaEllipsisV />
              </button> */}
            </div>
            {/* <div>
              <Link
                className={classes.modes}
                to={`/module/${educationalBlock.id}/modes`}
              >
                Режимы игры
              </Link>
            </div> */}
            {/* <GameModePanel gameModes={gameModes} /> */}
            <div style={{ height: "370px" }}>
              <AnimatePresence>
                {showCard && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <FlipCard
                      isFlipped={isFlipped}
                      flippedCard={flippedCard}
                      word={currentWord}
                      numberOfWords={numberOfWords}
                      cardNumber={wordIndex + 1}
                      nextCard={nextCard}
                      previousCard={previousCard}
                      isDisabledButtonNext={isDisabledButtonNext}
                      isDisabledButtonPrevious={isDisabledButtonPrevious}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* {isShowWords ? (
                <Button onClick={handlerClickShowWords}>
                  Скрыть все термины
                </Button>
              ) : (
                <Button onClick={handlerClickShowWords}>
                  Показать все термины
                </Button>
              )}
              <>
                <AnimatePresence>
                  {isShowWords && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <WordList words={educationalBlock.words} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </> */}
          </>
        </div>
      </Container>
    </section>
  );
};
