import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { data: null };

const fetch = async (state, action) => {
  console.log("fetch Called", action.payload);

  try {
    const { data } = await axios.get(
      `https://api.github.com/repos${action.payload}/contributors`
    );
    console.log(data);
    state.data = data;
    return data;
  } catch (e) {
    console.log({ ...e });
  }
};
export const contributors = createSlice({
  name: "contributors",
  initialState,
  reducers: {
    fetchContributors: fetch,
  },
});

// Action creators are generated for each case reducer function
export const { fetchContributors } = contributors.actions;

export default contributors.reducer;
