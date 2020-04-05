import { LoadStatus } from "../constants/loadStatus";
import { getInstructions } from "../actions/instructionsActions";
import { createReducer } from "@reduxjs/toolkit";

interface IDefaultState {
  description: string;
  instructionsLoadStatus: string;
}

export const initialState = {
  description: "",
  instructionsLoadStatus: LoadStatus.EMPTY
};

export default createReducer<IDefaultState>(initialState, {
  [getInstructions.request.getType()]: state => {
    state.instructionsLoadStatus = LoadStatus.REQUEST;
  },
  [getInstructions.error.getType()]: state => {
    state.instructionsLoadStatus = LoadStatus.ERROR;
  },
  [getInstructions.ok.getType()]: (state, action) => {
    state.instructionsLoadStatus = LoadStatus.OK;
    state.description = action.payload.response;
  }
});
