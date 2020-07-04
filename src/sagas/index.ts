import { all } from "redux-saga/effects";
import { usersSagas } from "./users";

export const rootSaga = function* () {
  yield all([...usersSagas]);
};
