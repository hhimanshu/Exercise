import { createActionAsync } from "redux-act-async";
import $http from "axios";
import { GET_COMMS, EDIT_COMMUNICATION } from "../constants/commsLeadConstants";
import { ICommunication } from "../types/communication"

export const getCommunications = createActionAsync(GET_COMMS, () => {
	return $http
		.get(`/commsLead.json`)
		.then(res => res.data)
		.catch(error => {
			throw error;
		});
});

export interface EditCommunicationAction {
	type: typeof EDIT_COMMUNICATION
	payload: ICommunication
}

export const editCommunication = (updatedCommunication: ICommunication): EditCommunicationAction => {
	return {
		type: EDIT_COMMUNICATION,
		payload: updatedCommunication
	}
}
