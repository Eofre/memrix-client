import { FC } from "react";
import classes from "./EducationalModulesList.module.scss";
import { IEducationalModule } from "../../types/types";
import EducationalModuleItem from "../EducationalModuleItem/EducationalModuleItem";

interface EducationalModulesListProps {
  list: IEducationalModule[];
}

const EducationalModulesList: FC<EducationalModulesListProps> = ({ list }) => {
  return (
    <ul className={classes.educationalModulesList}>
      {list.map((item) => (
        <EducationalModuleItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EducationalModulesList;
