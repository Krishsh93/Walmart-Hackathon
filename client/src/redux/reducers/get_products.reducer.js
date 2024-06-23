import {
  FETCH_ERROR,
  FETCH_LOADING,
  FETCH_PRODUCTS,
} from "../actions/action_types";

const initState = {
  loading: false,
  data: [],
  error: null,
  currentPage: 1,
};

const getProductsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_LOADING:
      return { ...initState, loading: true };
    case FETCH_PRODUCTS:
      return {
        ...initState,
        data: payload.products,
        currentPage: Number(payload.page),
      };
    case FETCH_ERROR:
      return { ...initState, error: true };
    default:
      return state;
  }
};

export { getProductsReducer };
