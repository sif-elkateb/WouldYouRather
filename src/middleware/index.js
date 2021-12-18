import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

const middleware=[thunk,logger];
export default applyMiddleware(...middleware);
 