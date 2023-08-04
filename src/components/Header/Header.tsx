import { FC } from "react";
import classes from "./Header.module.scss";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={classes.header}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <Logo />
          <div className={classes.right}>
            <Link to="/login">Вход</Link>
            <Link className={classes.reg} to="/modules">
              Регистрация
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
