import { applyMiddleware, legacy_createStore } from "redux";
import { allReducers } from "../reducers/all_reducers";
import { thunk } from "redux-thunk";

const store = legacy_createStore(allReducers, applyMiddleware(thunk));

export { store };
