import { FC } from "react";
import { Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { Layout } from "../Layout";
import EducationalModulesPage from "../../pages/EducationalModulesPage/EducationalModulesPage";
import { LayoutAuth } from "../LayoutAuth";
import EducationalModulePage from "../../pages/EducationalModulePage/EducationalModulePage";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
      </Route>
      <Route path="/modules" element={<LayoutAuth />}>
        <Route index path="/modules" element={<EducationalModulesPage />} />
        <Route index path="/modules/:id" element={<EducationalModulePage />} />
      </Route>
    </Routes>
  );
};
