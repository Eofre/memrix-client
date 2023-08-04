import { FC } from "react";
import classes from "./GameModePanel.module.scss";
import { IGameModeItem } from "../../types/types";
import GameModeItem from "../GameModeItem/GameModeItem";

interface GameModePanelProps {
  gameModes: IGameModeItem[];
}

const GameModePanel: FC<GameModePanelProps> = ({ gameModes }) => {
  return (
    <div className={classes.gameModePanel}>
      <ul>
        {gameModes.map((gameMode) => (
          <li>
            <GameModeItem gameMode={gameMode} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameModePanel;
