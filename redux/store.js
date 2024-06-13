import User from "./reducers/User";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import category from "./reducers/Categories";
import DonationItems from "./reducers/DonationItems";
const rootReducers = combineReducers({
  user: User,
  category: category,
  donation: DonationItems,
});
const configuration = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getMiddleware) =>
    getMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistedStore = persistStore(store);
