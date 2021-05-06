import { createAction, handleActions } from "redux-actions";
import { createRequestActionTypes } from "../lib/createRequestActionTypes";
import { put, call, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api/api";
import createRequestSaga from "../lib/createRequestSaga";

const [
  GET_PHARMACY,
  GET_PHARMACY_SUCCESS,
  GET_PHARMACY_FAILURE,
] = createRequestActionTypes("pharmacy/GET_PHARMACY");

export const getPharmacy = createAction(GET_PHARMACY, (lat, lon) => ({
  lat,
  lon,
}));

const getPharmacySaga = createRequestSaga(GET_PHARMACY, api.getPharmacyList);

export function* pharmacySaga() {
  yield takeLatest(GET_PHARMACY, getPharmacySaga);
}

const initialState = {
  pharmacyList: [],
};

const pharmacy = handleActions(
  {
    [GET_PHARMACY]: (state, action) => ({
      ...state,
    }),
    [GET_PHARMACY_SUCCESS]: (state, { payload: response }) => ({
      pharmacyList: response.response.body.items.item,
    }),
  },
  initialState
);
export default pharmacy;
