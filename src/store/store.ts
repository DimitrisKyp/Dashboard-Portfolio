import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import preferencesReducer from "./slices/preferencesSlice";

const rootReducer = combineReducers({
  preferences: preferencesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["preferences"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
