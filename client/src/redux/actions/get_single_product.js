import axios from "axios";
import {
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_ERROR,
  FETCH_SINGLE_PRODUCT_LOADING,
} from "./action_types";

const getSingleProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SINGLE_PRODUCT_LOADING });
    try {
      const productDetails = await axios.get(
        `${import.meta.env.VITE_GET_PRODUCTS}/${id}`
      );

      if (!productDetails.status == 200)
        return dispatch({ type: FETCH_SINGLE_PRODUCT_ERROR });

      dispatch({ type: FETCH_SINGLE_PRODUCT, payload: productDetails.data });
    } catch (error) {
      return dispatch({ type: FETCH_SINGLE_PRODUCT_ERROR });
    }
  };
};

export { getSingleProduct };
