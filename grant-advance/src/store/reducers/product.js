import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from "../actions";

const initialState = {
  products: []
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case PRODUCTS_FAILURE:
      return { ...state, loading: false };
    case PRODUCTS_SUCCESS:
      return { ...state, products: action.payload.products, loading: false };

    default:
      return state;
  }
}

export default productReducer;
