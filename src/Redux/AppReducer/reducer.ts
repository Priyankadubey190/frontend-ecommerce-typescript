import * as types from "./actionType";

interface State {
  cloths: any[]; // Adjust this according to your data structure
  cartData: any[]; // Adjust this according to your data structure
  cartKey: any[]; // Adjust this according to your data structure
  datalength: number;
  isLoading: boolean;
  isError: boolean;
}

const initialState: State = {
  cloths: [],
  cartData: [],
  cartKey: [],
  datalength: 0,
  isLoading: false,
  isError: false,
};

const reducer = (state: State = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CLOTHS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CLOTHS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cloths: payload,
      };
    case types.GET_CLOTHS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_CARTKEY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CARTKEY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartKey: payload,
      };
    case types.GET_CARTKEY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_CARTDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CARTDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartData: payload,
      };
    case types.GET_CARTDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_DATA_LENGTH:
      return {
        ...state,
        isLoading: false,
        datalength: payload,
      };
    default:
      return state;
  }
};

export { reducer };
