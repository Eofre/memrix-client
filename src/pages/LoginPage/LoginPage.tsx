import { FC } from "react";
import classes from "./LoginPage.module.scss";
import { LoginForm } from "../../components/LoginForm";
import login from "../../assets/images/login.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { decrement, increment } from "../../store/counter/counterSlice";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <section className={classes.loginPage}>
      <div className={classes.wrapper}>
        <LoginForm />
        <img src={login} alt="" />
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </section>
  );
};
