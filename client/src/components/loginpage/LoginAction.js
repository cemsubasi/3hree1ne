import { axiosCall, url3 } from "../../Data";

export const setAdmin = (arg) => (dispatch) => {
  axiosCall("post", url3, arg)
    .then((res) => dispatch({ type: "SET_ADMIN", payload: res }))
    .catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
