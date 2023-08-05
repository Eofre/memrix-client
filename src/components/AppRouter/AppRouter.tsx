import { FC } from "react";
import { Route, Routes } from "react-router";
import { Home } from "../../pages/HomePage";
import { Layout } from "../Layout";
import { LayoutAuth } from "../LayoutAuth";
import { EducationalBlockPage } from "../../pages/EducationalBlockPage";
import { LoginPage } from "../../pages/LoginPage";
import { EducationalBlocksPage } from "../../pages/EducationalBlocksPage";
import { GameModesPage } from "../../pages/GameModesPage";
import { PageTransition } from "../PageTransition";
import { SprintGameModePage } from "../../pages/SprintGameModePage";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/modules" element={<LayoutAuth />}>
        <Route index path="/modules" element={<EducationalBlocksPage />} />
        <Route index path="/modules/:id" element={<EducationalBlockPage />} />
        <Route index path="/modules/:id/games" element={<GameModesPage />} />
        <Route
          index
          path="/modules/:id/games/sprint"
          element={<SprintGameModePage />}
        />
      </Route>
    </Routes>
  );
};
