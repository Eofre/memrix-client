import { FC } from "react";
import classes from "./EducationalModuleItem.module.scss";
import { IEducationalModule } from "../../types/types";
import { useNavigate } from "react-router";

interface EducationalModuleItemProps {
  item: IEducationalModule;
}

const EducationalModuleItem: FC<EducationalModuleItemProps> = ({ item }) => {
  const numberOfTerms = item.words.length;
  const navigate = useNavigate();

  const handlerClick = () => navigate(`/modules/${item.id}`);

  return (
    <li className={classes.educationalModuleItem} onClick={handlerClick}>
      <h5>{item.name}</h5>
      <p className={classes.terms}>Кол-во терминов: {numberOfTerms}</p>
    </li>
  );
};

export default EducationalModuleItem;
