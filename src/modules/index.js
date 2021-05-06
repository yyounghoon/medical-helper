import { combineReducers } from "redux";
import position from "./position";
import pharmacy, { pharmacySaga } from "./pharmacy";
import covid, { covidSaga } from "./covid";
import { all } from "@redux-saga/core/effects";
import loading from "./loading";
import hospital, { hospitalSaga } from "./hospital";

export function* rootSaga() {
  yield all([pharmacySaga(), covidSaga(), hospitalSaga()]);
}

const rootReducer = combineReducers({
  position,
  hospital,
  pharmacy,
  covid,
  loading,
});
export default rootReducer;
