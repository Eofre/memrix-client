import { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({ variant = "primary", ...rest }) => {
  const className: string = `${classes.button} ${classes[`${variant}`]}`;
  return <button className={className} {...rest}></button>;
};
