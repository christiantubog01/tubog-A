import { call, put, takeLatest } from 'redux-saga/effects';
import {
  USER_LOGIN,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
} from '../actions';
import { authLogin } from '../api/auth';
import { SagaIterator } from 'redux-saga';

// ✅ types
type LoginPayload = {
  student_id: string;
  password: string;
};

type LoginAction = {
  type: string;
  payload: LoginPayload;
};

type LoginResponse = any;

export function* userLoginAsync(action: LoginAction): SagaIterator {
  console.log('Login request:', action.payload);

  yield put({ type: USER_LOGIN_REQUEST });

  try {
    const response: LoginResponse = yield call(authLogin, action.payload);

    console.log('Login response:', response);

    yield put({
      type: USER_LOGIN_COMPLETE,
      payload: response,
    });
  } catch (error) {
    console.error('Login error:', error);

    yield put({ type: USER_LOGIN_ERROR });
  }
}

export function* userLogin() {
  yield takeLatest(USER_LOGIN, userLoginAsync);
}