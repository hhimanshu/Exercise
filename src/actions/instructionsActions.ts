import { createActionAsync } from "redux-act-async";
import $http from "axios";
import { GET_INSTRUCTIONS } from "../constants/instructionsConstants";

export const getInstructions = createActionAsync(GET_INSTRUCTIONS, () => {
	return $http
		.get(`/instructions.md`)
		.then(res => res.data)
		.catch(error => {
			throw error;
		});
});
