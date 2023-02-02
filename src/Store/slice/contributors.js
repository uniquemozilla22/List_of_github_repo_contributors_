import { RepeatOneSharp } from "@mui/icons-material";
import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { status: "idle", data: {}, error: {} };

export const fetchContributors = (link) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/repos${link}/contributors`
    );
    dispatch({ type: "fetchContributors", payload: { data } });
  } catch (e) {
    dispatch({ type: "fetchContributors/error", payload: { data: e } });
  }
};

export const contributors = (state = initialState, action) => {
  switch (action.type) {
    case "fetchContributors": {
      const ModifiedState = {
        status: "success",
        data: action.payload.data,
        error: null,
      };
      return ModifiedState;
    }
    case "fetchContributors/error": {
      const ModifiedState = {
        status: "error",
        data: null,
        error: action.payload.data,
      };

      return ModifiedState;
    }

    default: {
      return state;
    }
  }
};
