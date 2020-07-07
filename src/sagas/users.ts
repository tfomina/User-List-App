import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  take,
} from "redux-saga/effects";
import * as actions from "actions/users";
import * as constants from "constants/users";
import * as api from "api/users";
import { CreateUserRequestAction } from "reducers/users";

function* getUsersHandler() {
  try {
    const result = yield call(api.getUsers);
    yield put(
      actions.getUsersSuccess({
        items: result.data.data || [],
      })
    );
  } catch (e) {
    yield put(
      actions.handleError({
        error: "An error occured when trying to get the users",
      })
    );
  }
}

function* watchGetUsers() {
  yield takeEvery(constants.GET_USERS_REQUEST, getUsersHandler);
}

function* createUserHandler(action: CreateUserRequestAction) {
  const { firstName, lastName } = action.payload;
  try {
    yield call(api.createUser, { firstName, lastName });
    yield call(getUsersHandler);
  } catch (e) {
    yield put(
      actions.handleError({
        error: "An error occured when trying to create the user",
      })
    );
  }
}

function* watchCreateUser() {
  yield takeLatest(constants.CREATE_USER_REQUEST, createUserHandler);
}

function* deleteUserHandler({ userId }: { userId: number }) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsersHandler);
  } catch (e) {
    yield put(
      actions.handleError({
        error: "An error occured when trying to delete the user",
      })
    );
  }
}

function* watchDeleteUser() {
  while (true) {
    const action = yield take(constants.DELETE_USER_REQUEST);
    yield call(deleteUserHandler, {
      userId: action.payload.userId,
    });
  }
}

export const usersSagas = [
  fork(watchGetUsers),
  fork(watchCreateUser),
  fork(watchDeleteUser),
];
