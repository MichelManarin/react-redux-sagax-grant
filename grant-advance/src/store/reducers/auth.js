import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS } from "../actions";

const initialState = {
  name: "",
  token: "",
  error: "",
  loading: false,
  creation : null,
  expirationDate: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, loading: true };
    case AUTH_FAILURE:
      return { ...state, loading: false, ...action.payload };
    case AUTH_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: "" };

    default:
      return state;
  }
}

export default authReducer;
