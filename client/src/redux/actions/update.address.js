import axios from "axios";
import { UPDATE_ADDRESS } from "./action_types";

const updateAddress = (email, address) => {
  return async (dispatch) => {
    try {
      if (!address) {
        dispatch({
          type: UPDATE_ADDRESS,
          payload: { data: { status: false } },
        });
        return;
      }

      const response = await axios({
        url: `${import.meta.env.VITE_GET_ITEMS}/address`,
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
