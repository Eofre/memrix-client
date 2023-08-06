import { FC } from "react";
import { Outlet } from "react-router";
import { Container } from "../Container";
import { HeaderGame } from "../HeaderGame";

export const LayoutGame: FC = () => {
  return (
    <>
      <HeaderGame />
      <main>
        <Container maxWidth={1200}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
