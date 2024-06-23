import { FETCH_LOADING, FETCH_PRODUCTS, FETCH_ERROR } from "./action_types";

import axios from "axios";

const getProducts = (page, category = "", order = "") => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LOADING });
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_GET_PRODUCTS
        }?page=${page}&category=${category}&order=${order}`
      );

      if (!response.status == 200) return dispatch({ type: FETCH_ERROR });

      dispatch({ type: FETCH_PRODUCTS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };
};

export { getProducts };
