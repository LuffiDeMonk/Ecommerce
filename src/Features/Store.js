import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import ShopReducer from "./ShopSlice";
import CartReducer from "./CartSlice";

const rootReducer = combineReducers({
  shop: ShopReducer,
  cart: CartReducer,
});
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);
