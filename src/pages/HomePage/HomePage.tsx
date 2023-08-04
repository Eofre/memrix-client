import { FC } from "react";
import classes from "./HomePage.module.scss";
import { MyLink } from "../../components/UI/MyLink";
import main from "../../assets/images/main.svg";

interface HomeProps {}

export const Home: FC<HomeProps> = () => (
  <section className={classes.home}>
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <span>
          Добро пожаловать в Memix - полностью бесплатное образовательное
          приложение! Никаких подписок или скрытых платежей. Развивайтесь и
          учите слова через захватывающие игры и головоломки. Образование
          доступно для всех! Присоединяйтесь к нам сегодня и откройте мир тайн и
          знаний!
        </span>
        <MyLink variant="secondary" href="#">
          Зарегистрироваться
        </MyLink>
      </div>
      <img className={classes.img} src={main} alt="" />
    </div>
  </section>
);
