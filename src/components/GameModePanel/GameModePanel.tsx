import { FC } from "react";
import classes from "./GameModePanel.module.scss";
import { IGameModeItem } from "../../types/types";
import GameModeItem from "../GameModeItem/GameModeItem";
import { useParams } from "react-router-dom";

interface GameModePanelProps {
  gameModes: IGameModeItem[];
}

const GameModePanel: FC<GameModePanelProps> = ({ gameModes }) => {
  return (
    <div className={classes.gameModePanel}>
      <ul>
        {gameModes.map((gameMode) => (
          <li key={gameMode.description}>
            <GameModeItem gameMode={gameMode} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameModePanel;
