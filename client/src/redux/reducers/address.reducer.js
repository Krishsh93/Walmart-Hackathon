import { UPDATE_ADDRESS } from "../actions/action_types";

const initState = {
  status: false,
};

const addressReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_ADDRESS:
      return { ...initState, status: payload.data.status };
    default:
      return state;
  }
};

export { addressReducer };
