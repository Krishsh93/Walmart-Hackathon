import axios from "axios";
import {
  FETCH_BAG_DATA,
  FETCH_BAG_ERROR,
  FETCH_BAG_LOADING,
} from "./action_types";

const bagProducts = (email) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_BAG_LOADING });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GET_ITEMS}/bag?email=${email}`
      );

      if (!response.status == 200) return dispatch({ type: FETCH_BAG_ERROR });

      dispatch({ type: FETCH_BAG_DATA, payload: response });
    } catch (error) {
      dispatch({ type: FETCH_BAG_ERROR });
    }
  };
};

export { bagProducts };
