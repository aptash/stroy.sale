import { put, takeLatest, all, call } from 'redux-saga/effects';
import { EReduxActionTypes } from './reducer';
import { IReduxLoginAction } from './actions';

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

function* login({ email, password }: IReduxLoginAction) {
  // на самом деле надо делать метод POST, но my-json-server.typicode.com не возвращает JSON по методу POST
  // const init = {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: email,
  //     password: password,
  //   }),
  // };

  const json = yield call(async () => {
    const response = await fetch('https://my-json-server.typicode.com/aptash/my-json-server/login');
    return await response.json();
  });
  yield localStorage.setItem('isAuthenticated', 'true');
  yield localStorage.setItem('jwt', json.jwt);
  yield put({ type: EReduxActionTypes.LOGGED_IN, jwt: json.jwt });
}

function* logout() {
  yield localStorage.removeItem('isAuthenticated');
  yield localStorage.removeItem('jwt');
  yield put({ type: EReduxActionTypes.LOGGED_OUT });
}

function* loginWatcher() {
  yield takeLatest(EReduxActionTypes.LOGIN, login);
}

function* logoutWatcher() {
  yield takeLatest(EReduxActionTypes.LOGOUT, logout);
}

function* getCalculation() {
  const json = yield call(async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/aptash/my-json-server/calculations'
    );
    return await response.json();
  });
  const arr = json.map((e: any) => {
    return { ...e, isRowActive: true };
  });
  yield put({ type: EReduxActionTypes.CALCULATION_READY, data: arr });
}

function* calculationWatcher() {
  yield takeLatest(EReduxActionTypes.GET_CALCULATION, getCalculation);
}

export default function* rootSaga() {
  yield all([helloSaga(), loginWatcher(), logoutWatcher(), calculationWatcher()]);
}
