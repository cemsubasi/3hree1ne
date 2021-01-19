import { axiosCall, url } from "../../Data";

export const fetchPosts = () => (dispatch) => {
  axiosCall("get", url)
    .then((res) => dispatch({ type: "FETCH_POSTS", payload: res }))
    .catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
