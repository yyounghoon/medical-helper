import { createAction, handleActions } from "redux-actions";
import { createRequestActionTypes } from "../lib/createRequestActionTypes";
import { put, call, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api/api";
import createRequestSaga from "../lib/createRequestSaga";

const [
  GET_HOSPITAL,
  GET_HOSPITAL_SUCCESS,
  GET_HOSPITAL_FAULURE,
] = createRequestActionTypes("hospital/GET_HOSPITAL");

export const getHospital = createAction(GET_HOSPITAL, (sido, gungu) => ({
  sido,
  gungu,
}));

const getHospitalSaga = createRequestSaga(GET_HOSPITAL, api.getHospitalList);

export function* hospitalSaga() {
  yield takeLatest(GET_HOSPITAL, getHospitalSaga);
}

const initialState = {
  hospitalList: null,
};

const hospital = handleActions(
  {
    [GET_HOSPITAL]: (state, action) => ({
      ...state,
    }),
    [GET_HOSPITAL_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      hospitalList: response.response.body.items.item,
    }),
  },
  initialState
);
export default hospital;
