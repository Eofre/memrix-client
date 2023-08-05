import { FC } from "react";
import { Outlet } from "react-router";
import { Container } from "../Container";
import { Header } from "../Header";
import { PageTransition } from "../PageTransition";

export const Layout: FC = () => {
  return (
    <PageTransition>
      <Header />
      <main>
        <Container maxWidth={1200}>
          <Outlet />
        </Container>
      </main>
    </PageTransition>
  );
};
