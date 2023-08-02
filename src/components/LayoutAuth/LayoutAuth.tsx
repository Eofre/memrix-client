import { FC } from "react";
import { Outlet } from "react-router";
import { Container } from "../Container";
import { Header } from "../Header";
import HeaderBase from "../HeaderBase/HeaderBase";

export const LayoutAuth: FC = () => {
  return (
    <>
      <HeaderBase />
      <main>
        <Container maxWidth={1200}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
