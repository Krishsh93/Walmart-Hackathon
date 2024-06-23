import axios from "axios";
import {
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_LOADING,
  FETCH_LOGIN_STATUS,
} from "./action_types";

const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LOGIN_LOADING });
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_LOGIN_USER}`,
        method: "POST",
        data: credentials,
      });

      dispatch({ type: FETCH_LOGIN_STATUS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_LOGIN_ERROR });
    }
  };
};

export { loginUser };
