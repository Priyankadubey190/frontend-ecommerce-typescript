import * as types from "./actionType";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

interface ClothData {
  data: any[];
  datalength: number;
}

const getClothDataRequest = () => {
  return {
    type: types.GET_CLOTHS_DATA_REQUEST,
  };
};

const getClothData = (queryParam: any) => (dispatch: Dispatch) => {
  dispatch(getClothDataRequest());
  return (
    axios.get <
    ClothData >
    (`https://gleaming-suspenders-bass.cyclic.app/womendata`,
    {
      params: queryParam,
    })
      .then((r: AxiosResponse<ClothData>) => {
        dispatch({
          type: types.GET_CLOTHS_DATA_SUCCESS,
          payload: r.data.data,
        });
        dispatch({
          type: types.GET_DATA_LENGTH,
          payload: r.data.datalength,
        });
        console.log("clothData", r);
      })
      .catch((e) => {
        dispatch({
          type: types.GET_CLOTHS_DATA_FAILURE,
        });
      })
  );
};

const getCartRequest = () => {
  return {
    type: types.GET_CARTKEY_REQUEST,
  };
};

const getCartSuccess = (payload: any) => {
  return {
    type: types.GET_CARTKEY_SUCCESS,
    payload,
  };
};

const getCartFailure = () => {
  return {
    type: types.GET_CARTKEY_FAILURE,
  };
};

const getCartData = (auth: string) => (dispatch: Dispatch) => {
  console.log("redux");
  dispatch(getCartRequest());
  dispatch({ type: types.GET_CARTDATA_REQUEST });
  return axios
    .get(`https://gleaming-suspenders-bass.cyclic.app/cart`, {
      headers: {
        authorization: auth,
      },
    })
    .then((r: AxiosResponse<any>) => {
      console.log("rdata", r.data.productarr);
      dispatch({
        type: types.GET_CARTDATA_SUCCESS,
        payload: r.data.productarr,
      });
      console.log("cartk", r.data.cartkey);
      dispatch(getCartSuccess(r.data.cartkey));
      console.log("clothData", r);
    })
    .catch((e) => {
      dispatch(getCartFailure());
      dispatch({ type: types.GET_CARTDATA_FAILURE });
    });
};

export {
  getClothData,
  getCartRequest,
  getCartSuccess,
  getCartFailure,
  getCartData,
};
