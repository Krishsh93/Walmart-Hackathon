import {
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_LOADING,
  FETCH_LOGIN_STATUS,
} from "../actions/action_types";

const initState = {
  loading: false,
  error: null,
  message: "",
  access_token: null,
  email: "",
};

const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_LOGIN_LOADING:
      return { ...initState, loading: true };
    case FETCH_LOGIN_STATUS:
      return {
        ...initState,
        message: payload.message,
        access_token: payload.access_token,
        email: payload.email,
      };
    case FETCH_LOGIN_ERROR:
      return { ...initState, error: true };
    default:
      return state;
  }
};

export { loginReducer };
