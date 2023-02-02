import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchContributors } from "../Store/slice/contributors";
export const ListPage = (props) => {
  const { state } = useLocation();

  const contributors = useSelector((state) => state.contributors);

  const [data, setData] = useState(contributors);
  const dispatch = useDispatch();

  const fetchData = useCallback(
    async (link) => {
      try {
        const listOfContributors = await dispatch(fetchContributors(link));
        console.log(listOfContributors);
        // setData([...listOfContributors]);
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    fetchData(new URL(state.link).pathname);
  }, [fetchData, state.link]);
  return (
    <>
      <h1>{state.link}</h1>
    </>
  );
};
