import { axiosCall } from "../../Data";
export const fetchPhotos = () => (dispatch) => {
  axiosCall("get", "/photos")
    .then((res) => dispatch({ type: "FETCH_PHOTOS", payload: res }))
    .catch((err) => dispatch({ type: "ERR_MESSAGES", payload: err }));
};
