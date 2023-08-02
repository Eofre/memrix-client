import { FC } from "react";
import classes from "./Logo.module.scss";

interface LogoProps {}

export const Logo: FC<LogoProps> = () => (
  <a href="#" className={classes.logo}>
    Memrix
  </a>
);
