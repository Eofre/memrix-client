import { FC } from "react";
import classes from "./Input.module.scss";

interface InputProps {
  label?: string;
}

export const Input: FC<InputProps> = ({ label }) => (
  <label className={classes.input}>
    <span>{label}</span>
    <input type="text" />
  </label>
);
