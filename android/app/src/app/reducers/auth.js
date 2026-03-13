import {
  USER_LOGIN,
  RESET_USER_LOGIN,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
} from '../actions';

const INITIALSTATE = {
  data: null,
  isLoading: false,
  isError: false,
};

export default function reducer(state = INITIALSTATE, action) {
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

    default:
      return state;
  }
}

export const authLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});