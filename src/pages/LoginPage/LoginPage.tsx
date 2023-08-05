import { FC } from "react";
import classes from "./LoginPage.module.scss";
import { LoginForm } from "../../components/LoginForm";
import login from "../../assets/images/login.svg";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  return (
    <section className={classes.loginPage}>
      <div className={classes.wrapper}>
        <LoginForm />
        <img src={login} alt="" />
      </div>
    </section>
  );
};
