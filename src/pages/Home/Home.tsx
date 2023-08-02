import { FC } from "react";
import classes from "./Home.module.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = () => (
  <section className={classes.home}>
    <div className={classes.main}>
      <span>
        Добро пожаловать в Enigma - полностью бесплатное образовательное
        приложение! Никаких подписок или скрытых платежей. Развивайтесь и учите
        слова через захватывающие игры и головоломки. Образование доступно для
        всех! Присоединяйтесь к нам сегодня и откройте мир тайн и знаний!
      </span>
    </div>
  </section>
);
