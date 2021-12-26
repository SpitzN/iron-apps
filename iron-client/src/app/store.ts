import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/formSlice";
import { ironAppsApi } from "../features/ironAppsAPI";

export const store = configureStore({
  reducer: {
    form: formReducer,
    [ironAppsApi.reducerPath]: ironAppsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ironAppsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
