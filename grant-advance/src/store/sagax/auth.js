import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../services/api";

export const getAuth = (state) => state.auth;

function* makeAuthentication({ payload }) {
  try {
    const { data } = yield call(api.post, `v1/authentication`, payload, {});

    if (data.error) throw new Error(data.error);

    yield put({ type: "LOGIN_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "LOGIN_FAILURE", payload: { error: "Invalid credential"} });
  }
}

export function* makeAuthenticationSaga() {
  yield takeLatest("LOGIN_REQUEST", makeAuthentication);
}
