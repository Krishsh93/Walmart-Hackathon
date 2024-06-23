import axios from "axios";
import { REG_USER } from "./action_types";

const registerUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_USER}/register`,
        method: "POST",
        data: credentials,
      });

      if (!response.status == 200) throw new Error("Something went wrong.");

      dispatch({ type: REG_USER, payload: response.data });
    } catch (error) {
      throw new Error("Something went wrong.");
    }
  };
};

export { registerUser };
