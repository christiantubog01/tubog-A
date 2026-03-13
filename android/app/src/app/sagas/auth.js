import { call, put, takeLatest } from 'redux-saga/effects';
import {
  USER_LOGIN,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
} from '../actions';
import { authLogin } from '../api/auth';

export function* userLoginAsync(action) {
  console.log('Login request:', action.payload);
  yield put({ type: USER_LOGIN_REQUEST });

  try {
    const response = yield call(authLogin, action.payload); // Mo pasa action payload
    console.log('Login response:', response);
    yield put({ type: USER_LOGIN_COMPLETE, payload: response }); 
  } catch (error) {
    console.error('Login error: ', error); 
    yield put({ type: USER_LOGIN_ERROR }); 
  }
}

export function* userLogin() {
  yield takeLatest(USER_LOGIN, userLoginAsync); //Mo take latest kung unsay pinka last sa pag log
}