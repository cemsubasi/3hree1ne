import { axiosCall, url4 } from "../../config";

export const addPost = (arg) => (dispatch) => {
	axiosCall("post", "/others", arg)
		.then(() => dispatch({ type: "ADD_POST", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const deletePost = (arg) => (dispatch) => {
	axiosCall("delete", "/others", { data: { postUrl: arg } })
		.then(() => dispatch({ type: "DELETE_POST", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const featuredPost = (arg) => (dispatch) => {
	axiosCall("put", "/others", {
		postUrl: arg.postUrl,
		featured: !arg.featured,
	})
		.then(() => dispatch({ type: "FEATURED_POST", payload: arg.postUrl }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const activatePost = (arg) => (dispatch) => {
	axiosCall("put", "/others/activation", {
		postUrl: arg.postUrl,
		isActive: !arg.isActive,
	})
		.then(() => dispatch({ type: "ACTIVATE_POST", payload: arg.postUrl }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const replacePost = (arg) => (dispatch) => {
	axiosCall("put", url4, {
		postUrl: arg.postUrl,
		postBody: arg.postBody,
		postHeader: arg.postHeader,
		author: arg.author,
		category: arg.category,
		thumbnail: arg.thumbnail,
	})
		.then(() => dispatch({ type: "REPLACE_POST", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const setErr = (arg) => (dispatch) => {
	// post sent successfuly
	if (arg === 0) {
		setTimeout(() => dispatch({ type: "SET_ERR", payload: -1 }), 3000);
		return dispatch({ type: "SET_ERR", payload: 0 });
	}
	// post didnt send
	if (arg === 1) {
		setTimeout(() => dispatch({ type: "SET_ERR", payload: -1 }), 3000);
		return dispatch({ type: "SET_ERR", payload: 1 });
	}
	// post deleted successfuly
	if (arg === 2) {
		setTimeout(() => dispatch({ type: "SET_ERR", payload: -1 }), 3000);
		return dispatch({ type: "SET_ERR", payload: 2 });
	}
};
export const editPost = (arg) => {
	return { type: "EDIT_POST", payload: arg };
};
export const choose = (arg) => {
	return { type: "CHOOSE_INPUT", payload: arg };
};
export const addPhoto = (arg) => (dispatch) => {
	axiosCall("post", "/photos", arg)
		.then(() => dispatch({ type: "ADD_PHOTO", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
