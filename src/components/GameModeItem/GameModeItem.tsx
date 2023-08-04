import { FC } from "react";
import classes from "./GameModeItem.module.scss";
import { IGameModeItem } from "../../types/types";
import { Link } from "react-router-dom";

interface GameModeItemProps {
  gameMode: IGameModeItem;
}

const GameModeItem: FC<GameModeItemProps> = ({ gameMode }) => {
  return (
    <Link to={gameMode.href} className={classes.gameModeItem}>
      {gameMode.name}
    </Link>
  );
};

export default GameModeItem;
