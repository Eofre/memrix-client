import { FC } from "react";
import classes from "./HeaderGame.module.scss";
import { RxCross1 } from "react-icons/rx";
import { GiSharpSmile } from "react-icons/gi";
import { TfiAlarmClock } from "react-icons/tfi";
import { Container } from "../Container";
import { IconButton } from "../UI/IconButton";
import { useNavigate, useParams } from "react-router";

interface HeaderGameProps {}

export const HeaderGame: FC<HeaderGameProps> = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handlerExit = () => navigate(`/modules/${params.id}`);
  return (
    <header className={classes.headerGame}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <span>Спринт</span>
          <TfiAlarmClock size={27} />
          {/* <GiSharpSmile size={27} /> */}
          <div>
            <IconButton
              variant="secondary"
              icon={<RxCross1 size={20} />}
              onClick={handlerExit}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
