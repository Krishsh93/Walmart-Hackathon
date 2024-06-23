import axios from "axios";
import { UPDATE_PAYMENT } from "./action_types";

const updatePayment = (email, payment) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_USER}/payment`,
        method: "POST",
        data: { email, payment },
      });
      dispatch({ type: UPDATE_PAYMENT, payload: response });
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };
};

export { updatePayment };
