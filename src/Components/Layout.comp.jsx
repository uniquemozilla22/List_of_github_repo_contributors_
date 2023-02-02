import styled from "@emotion/styled";
import React from "react";
import { HomePage } from "./../pages/home.page";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="list" element={<h1>Home</h1>} />
      <Route path="/" element={<HomePage />} exact />
    </>
  )
);
export const Layout = (props) => {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
};

const Container = styled.div`
  background: #2b2b2b;
  color: #fafafa;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
