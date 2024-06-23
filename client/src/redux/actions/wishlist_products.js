import axios from "axios";
import {
  FETCH_WISHLIST_DATA,
  FETCH_WISHLIST_ERROR,
  FETCH_WISHLIST_LOADING,
} from "./action_types";

const wishlistProducts = (email) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_WISHLIST_LOADING });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GET_ITEMS}/wishlist?email=${email}`
      );

      if (!response.status == 200)
        return dispatch({ type: FETCH_WISHLIST_ERROR });

      dispatch({ type: FETCH_WISHLIST_DATA, payload: response });
    } catch (error) {
      dispatch({ type: FETCH_WISHLIST_ERROR });
    }
  };
};

export { wishlistProducts };
