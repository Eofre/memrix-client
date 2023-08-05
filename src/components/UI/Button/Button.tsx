import { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ ...rest }) => (
  <button className={classes.button} {...rest}></button>
);
