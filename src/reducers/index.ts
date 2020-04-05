import { combineReducers } from "redux";
import commsLeadReducer from "./commsLeadReducer";
import instructionsReducer from "./instructionsReducer";

export default combineReducers({
  commsLead: commsLeadReducer,
  instructions: instructionsReducer
});
