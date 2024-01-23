import { call, put, takeLatest, select } from "redux-saga/effects";

import api from "../../services/api";

export const getAuth = (state) => state.auth;

function* fetchProductData() {
  try {
    const { token } = yield select(getAuth);

    const headerParams = {
      headers: { Authorization: "Bearer " + token },
    };

    const { data } = yield call(api.get, `v1/product`, headerParams);

    yield put({ type: "PRODUCTS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "PRODUCTS_FAILURE", payload: error });
  }
}

export function* fetchProductDataSaga() {
  yield takeLatest("PRODUCTS_REQUEST", fetchProductData);
}
