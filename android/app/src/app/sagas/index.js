// import { takeLatest } from 'redux-saga/effects';
// import { USER_LOGIN } from '../actions';

// export function* userLoginAsync(action) {
//   console.log('User login: ', action);

//   try {
    
//   } catch (error) {}
// }

// export function* userLogin() {
//   yield takeLatest(USER_LOGIN, userLoginAsync);
// }

import { all } from 'redux-saga/effects';
import { userLogin } from './auth';

export default function* rootSaga() {
  yield all([
    userLogin(),
  ]);
}