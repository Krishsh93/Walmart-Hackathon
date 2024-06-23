import {
  FETCH_WISHLIST_DATA,
  FETCH_WISHLIST_ERROR,
  FETCH_WISHLIST_LOADING,
} from "../actions/action_types";

const initState = {
  loading: false,
  error: null,
  products: [],
  totalCount: 0,
};

const wishlistReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_WISHLIST_LOADING:
      return { ...initState, loading: true };
    case FETCH_WISHLIST_DATA:
      return {
        ...initState,
        products: payload.data.products,
        totalCount: payload.data.totalCount,
      };
    case FETCH_WISHLIST_ERROR:
      return { ...initState, error: true };
    default:
      return state;
  }
};

export { wishlistReducer };
