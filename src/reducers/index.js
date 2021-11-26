import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import playerStatus from "./playerStatus";

const reducers = combineReducers({
  playerStatus
});

export default createStore(reducers, applyMiddleware(createLogger()));
