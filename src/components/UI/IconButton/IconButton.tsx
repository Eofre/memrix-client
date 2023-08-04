import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classes from "./IconButton.module.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  return (
    <button className={classes.iconButton} {...rest}>
      {icon}
    </button>
  );
};
