import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import * as types from "./actionTypes";

interface LoginPayload {
  // Define your payload type here
}

export const login = (payload: any) => (dispatch: Dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios({
    method: "post",
    baseURL: "https://gleaming-suspenders-bass.cyclic.app/login",
    data: payload,
  })
    .then((r: AxiosResponse<{ token: string }>) => {
      console.log("logauth", r.data.token);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: `Bearer ${r.data.token}`,
      });
      console.log("Again Login success");
    })
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};
