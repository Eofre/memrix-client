import { FC } from "react";
import classes from "./LoginForm.module.scss";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  return (
    <div className={classes.loginForm}>
      <h2>Вход</h2>
      <div className={classes.inputs}>
        <Input label="Логин" />
        <Input label="Пароль" />
      </div>
      <Button>Войти</Button>
    </div>
  );
};
