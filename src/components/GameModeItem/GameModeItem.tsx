import { FC } from "react";
import classes from "./GameModeItem.module.scss";
import { IGameModeItem } from "../../types/types";
import { Link, useParams } from "react-router-dom";

interface GameModeItemProps {
  gameMode: IGameModeItem;
}

const GameModeItem: FC<GameModeItemProps> = ({ gameMode }) => {
  const params = useParams();
  const path = `/games/${gameMode.namePath}/1`;
  return (
    <Link to={path} className={classes.gameModeItem}>
      <h3 className={classes.name}>{gameMode.name}</h3>
      <p className={classes.description}>{gameMode.description}</p>
    </Link>
  );
};

export default GameModeItem;
