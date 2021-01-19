import { axiosCall, url2, url4 } from "../../Data";

export const addPost = (arg) => (dispatch) => {
  axiosCall("post", url2, arg)
    .then(() => dispatch({ type: "ADD_POST", payload: arg }))
    .catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const deletePost = (arg) => (dispatch) => {
  axiosCall("delete", url2, { data: { postUrl: arg } })
    .then(() => dispatch({ type: "DELETE_POST", payload: arg }))
    .catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const featuredPost = (arg) => (dispatch) => {
  axiosCall("put", url2, { postUrl: arg.postUrl, featured: !arg.featured })
    .then(() => dispatch({ type: "FEATURED_POST", payload: arg.postUrl }))
    .catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const replacePost = (arg) => (dispatch) => {
  axiosCall("put", url4, {
    postUrl: arg.postUrl,
    postBody: arg.postBody,
    postHeader: arg.postHeader,
    author: arg.author,
    category: arg.category,
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
