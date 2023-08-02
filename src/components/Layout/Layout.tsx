import { FC } from "react";
import { Outlet } from "react-router";
import { Container } from "../Container";
import { Header } from "../Header";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth={1200}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
