import { REG_ERROR, REG_LOADING, REG_USER } from "../actions/action_types";

const initState = {
  loading: false,
  error: null,
  message: undefined,
  status: false,
};

const registerUserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REG_LOADING:
      return { ...initState, loading: true };
    case REG_USER:
      return { ...initState, ...payload };
    case REG_ERROR:
      return { ...initState, error: true };
    default:
      return state;
  }
};

export { registerUserReducer };
