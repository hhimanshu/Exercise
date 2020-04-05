import { createActionAsync } from "redux-act-async";
import $http from "axios";
import { GET_COMMS } from "../constants/commsLeadConstants";

export const getCommunications = createActionAsync(GET_COMMS, () => {
	return $http
		.get(`/commsLead.json`)
		.then(res => res.data)
		.catch(error => {
			throw error;
		});
});
