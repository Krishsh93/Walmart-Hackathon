import { REG_USER } from "../actions/action_types";

const initState = { message: undefined, status: false };

const registerUserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REG_USER:
      return { ...initState, ...payload };
    default:
      return state;
  }
};

export { registerUserReducer };
