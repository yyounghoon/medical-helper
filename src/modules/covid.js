import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import { createRequestActionTypes } from "../lib/createRequestActionTypes";
import createRequestSaga from "../lib/createRequestSaga";
import * as api from "../lib/api/covid";

const [
  GET_COVID_DATA,
  GET_COVID_DATA_SUCCESS,
  GET_COVID_DATA_FAILURE,
] = createRequestActionTypes("covid/GET_COVID_DATA");

const [
  GET_DISASTER_MSG,
  GET_DISASTER_MSG_SUCCESS,
  GET_DISASATER_MSG_FAILURE,
] = createRequestActionTypes("covid/GET_DISASTER_MESSAGE");

export const getCovidData = createAction(GET_COVID_DATA);
export const getDisasterMsg = createAction(GET_DISASTER_MSG);

const getCovidDataSaga = createRequestSaga(GET_COVID_DATA, api.getCoronaData);
const getDisasterMsgSaga = createRequestSaga(
  GET_DISASTER_MSG,
  api.getDisasterMsg
);

export function* covidSaga() {
  yield takeLatest(GET_COVID_DATA, getCovidDataSaga);
  yield takeLatest(GET_DISASTER_MSG, getDisasterMsgSaga);
}

const initialState = {
  covidData: null,
  disasterMsg: null,
};

const covid = handleActions(
  {
    [GET_COVID_DATA_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      covidData: response.response.body.items.item,
    }),
    [GET_DISASTER_MSG_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      disasterMsg: response.DisasterMsg[1].row,
    }),
  },
  initialState
);
export default covid;
