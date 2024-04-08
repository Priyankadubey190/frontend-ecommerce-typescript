import * as types from "./actionTypes";

export interface authState {
  isAuth: boolean;
  token: string;
  isLoading: boolean;
  isError: boolean;
}

const initialState: authState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state: any = initialState, action: any): any => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        isLoading: false,
        isAuth: true,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
