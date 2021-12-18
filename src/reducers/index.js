import { usersReducer } from "./usersReducer";
import { questionsReducer } from "./questionsReducer";
import { loggedinUserReducer } from "./loggedinReducer";
import { combineReducers } from "redux";

export default combineReducers({
  usersInformation:usersReducer,
  questionsInformation:questionsReducer,
  loggedinUser:loggedinUserReducer
});