import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/auth";
import productReducer from "./reducers/product";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import { makeAuthenticationSaga } from "./sagax/auth";
import { fetchProductDataSaga } from "./sagax/product";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "product"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([makeAuthenticationSaga(), fetchProductDataSaga()]);
}

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
