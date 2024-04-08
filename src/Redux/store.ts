// import {
//   legacy_createStore,
//   applyMiddleware,
//   compose,
//   combineReducers,
// } from "redux";
// import thunk from "redux-thunk";

// import { reducer as AppReducer } from "./AppReducer/reducer";

// const rootReducer = combineReducers({ AppReducer, AuthReducer });

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = legacy_createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { reducer as AuthReducer } from "./AuthReducer/reducer";
// import { reducer as AppReducer } from "./AppReducer/reducer";

// const rootReducer = combineReducers({ AppReducer, AuthReducer });

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from "./AuthReducer/reducer";

interface RootState {
  auth: any;
  // Add more states here if needed
}

const rootReducer = combineReducers<RootState>({
  auth: AuthReducer,
  // Add more reducers here if needed
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
