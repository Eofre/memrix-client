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
import { LayoutGame } from "../LayoutGame";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route index path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/modules" element={<LayoutAuth />}>
        <Route
          index
          path="/modules"
          element={
            <PageTransition>
              <EducationalBlocksPage />
            </PageTransition>
          }
        />
        <Route
          index
          path="/modules/:id"
          element={
            <PageTransition>
              <EducationalBlockPage />
            </PageTransition>
          }
        />
        <Route
          index
          path="/modules/:id/games"
          element={
            <PageTransition>
              <GameModesPage />
            </PageTransition>
          }
        />
      </Route>
      <Route path="/games" element={<LayoutGame />}>
        <Route
          index
          path="/games/sprint/:id"
          element={
            <PageTransition>
              <SprintGameModePage />
            </PageTransition>
          }
        />
      </Route>
    </Routes>
  );
};
