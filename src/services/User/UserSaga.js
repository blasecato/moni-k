import { put, takeLatest, all } from 'redux-saga/effects';

import { Types as userActions } from "./userActions";

function* getAll(data) {  
    console.log(data);
    const response = yield fetch("https://reqres.in/api/users?page=1")
      const users = yield response.json();
      console.log(users.data);
      yield put({ type: userActions.GET_ALL_SUCCESS, users: users.data })
}

function* ActionWatcher() {
  yield takeLatest(userActions.GET_ALL, getAll)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}