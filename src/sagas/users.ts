import { takeEvery, takeLatest, call, fork, put } from "redux-saga/effects";
import * as actions from "actions/users";
import * as constants from "constants/users";
import * as api from "api/users";
import { CreateUserRequestAction } from "src/reducers/users";

function* getUsersHandler() {
  try {
    const result = yield call(api.getUsers);
    yield put(
      actions.getUsersSuccess({
        items: result.data.data || [],
      })
    );
  } catch (e) {}
}

function* watchGetUsers() {
  yield takeEvery(constants.GET_USERS_REQUEST, getUsersHandler);
}

function* createUserHandler(action: CreateUserRequestAction) {
  const { firstName, lastName } = action.payload;
  try {
    yield call(api.createUser, { firstName, lastName });
    yield call(getUsersHandler);
  } catch (e) {}
}

function* watchCreateUser() {
  yield takeLatest(constants.CREATE_USER_REQUEST, createUserHandler);
}

export const usersSagas = [fork(watchGetUsers), fork(watchCreateUser)];
