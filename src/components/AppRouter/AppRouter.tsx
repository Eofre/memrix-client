import { FC } from "react";
import { Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { Layout } from "../Layout";
import EducationalModulesPage from "../../pages/EducationalModulesPage/EducationalModulesPage";
import { LayoutAuth } from "../LayoutAuth";
import { EducationalBlockPage } from "../../pages/EducationalBlockPage";

export const AppRouter: FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
      </Route> */}
      <Route path="/" element={<LayoutAuth />}>
        <Route index path="/" element={<EducationalModulesPage />} />
        <Route path="/:id" element={<EducationalBlockPage />} />
      </Route>
    </Routes>
  );
};
