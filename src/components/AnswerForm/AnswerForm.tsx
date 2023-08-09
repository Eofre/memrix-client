import { ChangeEvent, FC } from "react";
import classes from "./AnswerForm.module.scss";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

interface AnswerFormProps {
  answer: string;
  onClickSendAnswer: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onChangeAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AnswerForm: FC<AnswerFormProps> = ({
  answer,
  onClickSendAnswer,
  onChangeAnswer,
}) => {
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
  };
  return (
    <form className={classes.form}>
      <Input
        placeholder="Ответ..."
        onChange={onChangeAnswer}
        value={answer}
        onPaste={handlePaste}
      />
      <Button onClick={onClickSendAnswer}>Ответить</Button>
    </form>
  );
};
