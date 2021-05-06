import { createAction, handleActions } from "redux-actions";

const SET_POSITION = "postion/SET_POSITION";

export const setPosition = createAction(SET_POSITION, (lat, lon) => ({
  lat,
  lon,
}));

const initialState = {
  lat: 33.450701,
  lon: 126.570667,
};

const position = handleActions(
  {
    [SET_POSITION]: (state, { payload: position }) => ({
      lat: position.lat,
      lon: position.lon,
    }),
  },
  initialState
);
export default position;
