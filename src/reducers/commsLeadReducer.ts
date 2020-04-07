import { createReducer } from "@reduxjs/toolkit";
import { getCommunications } from "../actions/commsLeadActions";
import { LoadStatus } from "../constants/loadStatus";
import { EDIT_COMMUNICATION } from "../constants/commsLeadConstants"
import { ICommunication } from "../types/communication";

interface IDefaultState {
communications: ICommunication[];
  commsLeadLoadStatus: string;
}

export const initialState = {
  communications: [],
  commsLeadLoadStatus: LoadStatus.EMPTY
};

export default createReducer<IDefaultState>(initialState, {
  [getCommunications.request.getType()]: state => {
    state.commsLeadLoadStatus = LoadStatus.REQUEST;
  },
  [getCommunications.error.getType()]: state => {
    state.commsLeadLoadStatus = LoadStatus.ERROR;
  },
  [getCommunications.ok.getType()]: (state, action) => {
    state.commsLeadLoadStatus = LoadStatus.OK;
    state.communications = action.payload.response.communications;
  },
  [EDIT_COMMUNICATION]: (state, action) => {
    console.log("reducer got edited communication", action.payload)
    state.communications = [action.payload];
  }
});
