import { FC } from "react";
import { Route, Routes } from "react-router";
import { Home } from "../../pages/HomePage";
import { Layout } from "../Layout";
import EducationalModulesPage from "../../pages/EducationalModulesPage/EducationalModulesPage";
import { LayoutAuth } from "../LayoutAuth";
import { EducationalBlockPage } from "../../pages/EducationalBlockPage";
import { LoginPage } from "../../pages/LoginPage";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/modules" element={<LayoutAuth />}>
        <Route index path="/modules" element={<EducationalModulesPage />} />
        <Route index path="/modules/:id" element={<EducationalBlockPage />} />
      </Route>
    </Routes>
  );
};
