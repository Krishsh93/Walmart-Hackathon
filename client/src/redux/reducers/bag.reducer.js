import {
  FETCH_BAG_DATA,
  FETCH_BAG_ERROR,
  FETCH_BAG_LOADING,
} from "../actions/action_types";

const initState = {
  loading: false,
  error: null,
  products: [],
  totalCount: 0,
  totalCost: 0,
};

const bagReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_BAG_LOADING:
      return { ...initState, loading: true };
    case FETCH_BAG_DATA:
      return {
        ...initState,
        products: payload.data.products,
        totalCount: payload.data.totalCount,
        totalCost: payload.data.totalCost,
      };
    case FETCH_BAG_ERROR:
      return { ...initState, error: true };
    default:
      return state;
  }
};

export { bagReducer };
