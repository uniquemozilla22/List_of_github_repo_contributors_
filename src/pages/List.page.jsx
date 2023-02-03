import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchContributors } from "../Store/slice/contributors";
import { ListComponent } from "../Components/List.comp";
import styled from "@emotion/styled";
export const ListPage = (props) => {
  const { state } = useLocation();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const contributors = useSelector((state) => state.contributors);
  const [data, setData] = useState(contributors);
  const fetchData = useCallback((link, count) => {
    try {
      dispatch(fetchContributors(link));
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    fetchData(new URL(state.link).pathname, count);
    dispatch({ type: "fetchUserDetail/destroy" });
  }, [state.link]);
  return (
    <Wrapper>
      <h1 style={{ flex: 10 }}>Contributors</h1>
      <Container>
        {contributors?.status === "success" ? (
          contributors.data.map((data, index) => (
            <ListComponent key={index} {...data} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 10rem;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  width;100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height:90vh;
  overflow-y:scroll;
`;
