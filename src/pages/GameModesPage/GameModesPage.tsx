import { FC } from "react";
import classes from "./GameModesPage.module.scss";
import GameModePanel from "../../components/GameModePanel/GameModePanel";
import gameModes from "../../data/gameModes";
import { useParams } from "react-router";

interface GameModesPageProps {}

export const GameModesPage: FC<GameModesPageProps> = () => {
  return (
    <section className={classes.gameModesPage}>
      <GameModePanel gameModes={gameModes} />
    </section>
  );
};
