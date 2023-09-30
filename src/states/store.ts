import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import  authReducer, { AuthState }  from "./slices/authentication";
import pageReducer, { PageState } from "./slices/page";

export type AppState = {
  auth: AuthState,
  page: PageState
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    page: pageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
});

setupListeners(store.dispatch);
