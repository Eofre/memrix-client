import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classes from "./IconButton.module.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: "primary" | "secondary";
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  variant = "primary",
  ...rest
}) => {
  const className: string = `${classes.iconButton} ${classes[`${variant}`]}`;
  return (
    <button className={className} {...rest}>
      {icon}
    </button>
  );
};
