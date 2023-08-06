import { FC } from "react";
import classes from "./ResultGameSprint.module.scss";

interface ResultGameSprintProps {}

export const ResultGameSprint: FC<ResultGameSprintProps> = () => {
  return <div className={classes.resultGameSprint}>Конец</div>;
};
