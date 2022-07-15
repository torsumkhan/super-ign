import { combineReducers } from "redux";
import gamesReducers from "./gameReducers";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducers,
  details: detailReducer,
});

export default rootReducer;
