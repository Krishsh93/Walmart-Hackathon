import {
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_ERROR,
  FETCH_SINGLE_PRODUCT_LOADING,
} from "../actions/action_types";

const initState = {
  loading: false,
  error: null,
  productDetails: [],
};

const singleProductReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_SINGLE_PRODUCT_LOADING:
      return { ...initState, loading: true };

    case FETCH_SINGLE_PRODUCT:
      return { ...initState, productDetails: payload.product };

    case FETCH_SINGLE_PRODUCT_ERROR:
      return { ...initState, error: true };

    default:
      return state;
  }
};

export { singleProductReducer };
