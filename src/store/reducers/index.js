import { combineReducers } from "redux";
import lang from "./Lang";
import loader from "./Loader";
import auth from "./auth";

export default combineReducers({
  lang,
  loader,
  auth,
});
