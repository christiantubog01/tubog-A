import {
  USER_LOGIN,
  RESET_USER_LOGIN,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
} from '../actions';

// =====================
// State type
// =====================
type AuthState = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

// =====================
// Action type
// =====================
type AuthAction = {
  type: string;
  payload?: any;
};

// =====================
// Initial state
// =====================
const INITIALSTATE: AuthState = {
  data: null,
  isLoading: false,
  isError: false,
};

// =====================
// Reducer
// =====================
export default function reducer(
  state: AuthState = INITIALSTATE,
  action: AuthAction
): AuthState {
  console.log(action.type);

  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
        isError: false,
      };

    case USER_LOGIN_COMPLETE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
      };

    case RESET_USER_LOGIN:
      return INITIALSTATE;

    case USER_LOGOUT:
      return INITIALSTATE;

    default:
      return state;
  }
}

// =====================
// Action creator
// =====================
export const authLogin = (payload: any) => ({
  type: USER_LOGIN,
  payload,
});