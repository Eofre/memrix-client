import { FC, InputHTMLAttributes } from "react";
import classes from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
}

export const Input: FC<InputProps> = ({ variant = "primary", ...rest }) => {
  const className: string = `${classes.input} ${classes[`${variant}`]}`;
  return <input className={className} {...rest} />;
};
