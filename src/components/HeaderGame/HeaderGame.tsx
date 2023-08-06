import { FC } from "react";
import classes from "./HeaderGame.module.scss";
import { RxCross1 } from "react-icons/rx";
import { GiSharpSmile } from "react-icons/gi";
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
      <Container maxWidth={1100}>
        <div className={classes.wrapper}>
          <span>Спринт</span>
          <GiSharpSmile size={27} />
          <div>
            <IconButton icon={<RxCross1 size={20} />} onClick={handlerExit} />
          </div>
        </div>
      </Container>
    </header>
  );
};
