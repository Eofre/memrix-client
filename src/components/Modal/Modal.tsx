import { FC } from "react";
import classes from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: any;
}

export const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  return (
    <div
      className={`${classes.modal} ${visible ? classes.active : ""}`}
      onClick={() => setVisible(false)}
    >
      <div
        className={`${classes.modal__content} ${visible ? classes.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
