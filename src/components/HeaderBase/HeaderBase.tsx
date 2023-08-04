import { FC } from "react";
import classes from "./HeaderBase.module.scss";
import { Link } from "react-router-dom";
import { Container } from "../Container";
import { VscAccount } from "react-icons/vsc";
import account from "../../assets/images/account.jpg";
import { Logo } from "../Logo";
import { RiAccountPinCircleFill } from "react-icons/ri";

interface HeaderBaseProps {}

const HeaderBase: FC<HeaderBaseProps> = () => {
  return (
    <header className={classes.header}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <Logo />
          <div className={classes.right}>
            <a href="#">Библиотека</a>
          </div>

          <a href="#">
            {/* <VscAccount fontSize={27} /> */}
            {/* <img className={classes.account} src={account} alt="" /> */}
            <RiAccountPinCircleFill fontSize={37} />
          </a>
        </div>
      </Container>
    </header>
  );
};

export default HeaderBase;
