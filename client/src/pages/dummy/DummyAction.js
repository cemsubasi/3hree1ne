import { axiosCall } from "../../config";
export const addComment = (arg) => (dispatch) => {
	axiosCall("put", "/comments", arg)
		.then(() => dispatch({ type: "ADD_COMMENT", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
