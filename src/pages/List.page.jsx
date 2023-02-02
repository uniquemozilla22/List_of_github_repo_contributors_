import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const ListPage = (props) => {
  const { state } = useLocation();

  return (
    <>
      <h1>{state.id}</h1>
    </>
  );
};
