import axios from "axios";
import { REG_ERROR, REG_LOADING, REG_USER } from "./action_types";

const registerUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: REG_LOADING });
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_USER}/register`,
        method: "POST",
        data: credentials,
      });

      if (!response.status == 200) throw new Error("Something went wrong.");

      dispatch({ type: REG_USER, payload: response.data });
    } catch (error) {
      dispatch({ type: REG_ERROR });
      throw new Error("Something went wrong.");
    }
  };
};

export { registerUser };
