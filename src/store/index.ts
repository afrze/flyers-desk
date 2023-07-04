import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import toggleReducer from "./toggleSlice";
import ticketReducer from "./ticketSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const Reducers = combineReducers({
  user: userReducer,
  toggle: toggleReducer,
  ticket: ticketReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, Reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
