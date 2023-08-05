import { FC } from "react";
import classes from "./EducationalBlocksPage.module.scss";
import EducationalModulesList from "../../components/EducationalModulesList/EducationalModulesList";
import educationalBlocks from "../../data/educationalBlocks";

interface EducationalBlocksProps {}

export const EducationalBlocksPage: FC<EducationalBlocksProps> = () => {
  return (
    <section className={classes.educationalModules}>
      <EducationalModulesList list={educationalBlocks} />
    </section>
  );
};
