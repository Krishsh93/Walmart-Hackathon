import axios from "axios";
import { UPDATE_ADDRESS } from "./action_types";

const updateAddress = (email, address) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_USER}/address`,
        method: "POST",
        data: { email, address },
      });
      dispatch({ type: UPDATE_ADDRESS, payload: response });
    } catch (error) {
      throw new Error("Something went wrong.");
    }
  };
};

export { updateAddress };
