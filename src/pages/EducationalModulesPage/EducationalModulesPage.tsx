import { FC } from "react";
import classes from "./EducationalModulesPage.module.scss";
import EducationalModulesList from "../../components/EducationalModulesList/EducationalModulesList";
import educationalBlocks from "../../data/educationalBlocks";

interface EducationalModulesProps {}

const EducationalModulesPage: FC<EducationalModulesProps> = () => {
  return (
    <section className={classes.educationalModules}>
      <EducationalModulesList list={educationalBlocks} />
    </section>
  );
};

export default EducationalModulesPage;
