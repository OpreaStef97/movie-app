const initialState = {
  loading: false,
  error: null,
};

export const STATUS_LOADING = "STATUS_LOADING";
export const STATUS_ERROR = "STATUS_ERROR";
export const STATUS_SUCCESS = "STATUS_SUCCESS";
export const STATUS_RESET = "STATUS_RESET";

export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STATUS_RESET:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
