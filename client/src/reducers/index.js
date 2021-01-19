import { Data } from "../Data";

export const reducer = (state = Data, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, postState: [...state.postState, ...action.payload] };
    case "FETCH_PHOTOS":
      return { ...state, photoState: [...state.photoState, ...action.payload] };
    case "ADD_POST":
      return {
        ...state,
        postState: [...state.postState, { ...action.payload }],
      };
    case "DELETE_POST":
      return {
        ...state,
        postState: state.postState.filter(
          (item) => item.postUrl !== action.payload
        ),
      };
    case "FEATURED_POST":
      return {
        ...state,
        postState: state.postState.map((item) =>
          item.postUrl === action.payload
            ? { ...item, featured: !item.featured }
            : { ...item }
        ),
      };
    case "REPLACE_POST":
      return {
        ...state,
        postState: state.postState.map((item) =>
          item.postUrl === action.payload.postUrl
            ? { ...item, ...action.payload }
            : { ...item }
        ),
      };
    case "EDIT_POST":
      return { ...state, editState: action.payload };
    case "SET_ADMIN":
      return { ...state, isAdmin: action.payload };
    case "SET_ERR":
      return { ...state, errState: action.payload };
    case "ERR_MESSAGE":
      return { ...state, errMessage: action.payload };
    case "CHOOSE_INPUT":
      return { ...state, superInputState: action.payload };
    case "ADD_PHOTO":
      return {
        ...state,
        photoState: [...state.photoState, { ...action.payload }],
      };
    case "ADD_COMMENT":
      return {
        ...state,
        postState: state.postState.map((item) =>
          item.postUrl === action.payload.postUrl
            ? {
                ...item,
                comments: [...item.comments, { ...action.payload.comment }],
              }
            : { ...item }
        ),
      };
    default:
      return state;
  }
};
