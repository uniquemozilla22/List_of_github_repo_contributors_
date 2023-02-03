import { RepeatOneSharp } from "@mui/icons-material";
import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { status: "idle", data: null, error: null };

export const fetchContributors = (link, page) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/repos${link}/contributors`,
      { page }
    );
    if (page > 1) {
      dispatch({ type: "fetchContributors/add", payload: { data } });
    } else {
      dispatch({ type: "fetchContributors", payload: { data } });
    }
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

    case "fetchContributors/add": {
      const ModifiedState = {
        status: "error",
        data: [...state.data, ...action.payload.data],
        error: null,
      };

      return ModifiedState;
    }

    default: {
      return state;
    }
  }
};
