export const AUTH_REQUEST = "LOGIN_REQUEST";
export const AUTH_SUCCESS = "LOGIN_SUCCESS";
export const AUTH_FAILURE = "LOGIN_FAILURE";
export const AUTH_CLEAR = "LOGIN_CLEAR";

export const PRODUCTS_REQUEST = "PRODUCTS_REQUEST";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_FAILURE = "PRODUCTS_FAILURE";

export function loginRequest(payload) {
  return { type: AUTH_REQUEST, payload };
}

export function loginClear() {
  return { type: AUTH_CLEAR };
}

export function productsRequest() {
  return { type: PRODUCTS_REQUEST };
}
