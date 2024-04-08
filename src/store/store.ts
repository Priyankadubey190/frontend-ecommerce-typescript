// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./auth.slice";
// import productReducer from "./product.slice";

// export const store = configureStore({
//   reducer: {
//     auth: authSlice,
//     product: productReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// // setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import productReducer from "./product.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
