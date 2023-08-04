import { FC, ReactNode } from "react";
import classes from "./MyLink.module.scss";
import { Link } from "react-router-dom";

interface MyLinkProps {
  href: string;
  variant: "primary" | "secondary";
  children: ReactNode;
}

export const MyLink: FC<MyLinkProps> = ({ href, variant, children }) => {
  const className: string = `${classes.myLink} ${classes[`${variant}`]}`;
  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
};
