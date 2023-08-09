import { FC } from "react";
import classes from "./GameSprintStartForm.module.scss";
import { Button } from "../UI/Button";

interface GameSprintStartFormProps {
  onClickStart: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const GameSprintStartForm: FC<GameSprintStartFormProps> = ({
  onClickStart,
}) => {
  return (
    <form className={classes.form}>
      <div className={classes.text}>
        <h3 className={classes.title}>Добро пожаловать в режим Спринт!</h3>
        <p className={classes.description}>
          Успей написать термин за ограниченное кол-во времени!
        </p>
        <p className={classes.description}>Удачи боец!</p>
      </div>
      <Button onClick={onClickStart}>Начать</Button>
    </form>
  );
};
