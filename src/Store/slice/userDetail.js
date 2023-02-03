import axios from "axios";

export const fetchUser = (username) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );

    console.log(data);
    dispatch({ type: "fetchUserDetail", payload: { data } });
  } catch (e) {
    dispatch({ type: "fetchUserDetail/error", payload: { error: e } });
  }
};

export const UserDetails = (
  state = { success: "idle", error: null, data: null },
  action
) => {
  switch (action.type) {
    case "fetchUserDetail": {
      const ModifiedState = {
        status: "success",
        error: null,
        data: action.payload.data,
      };
      return ModifiedState;
    }
    case "fetchUserDetail/error": {
      const ModifiedState = {
        status: "error",
        error: action.payload.error,
        data: null,
      };
      return ModifiedState;
    }
    case "fetchUserDetail/destroy": {
      const ModifiedState = {
        status: "idle",
        error: null,
        data: null,
      };
      return ModifiedState;
    }
    default: {
      return state;
    }
  }
};
