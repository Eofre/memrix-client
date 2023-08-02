import { FC } from "react";
import classes from "./HeaderBase.module.scss";
import { Link } from "react-router-dom";
import { Container } from "../Container";
import { Logo } from "../Logo";

interface HeaderBaseProps {}

const HeaderBase: FC<HeaderBaseProps> = () => {
  return (
    <header className={classes.header}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <Logo />
          <div className={classes.right}>
            <Link to="/modules">Модули</Link>
          </div>
          <a href="#">Профиль</a>
        </div>
      </Container>
    </header>
  );
};

export default HeaderBase;
