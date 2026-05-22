import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../actions/cart';

const INITIAL_STATE = {
  cartItems: [],
};

export default function reducer(
  state = INITIAL_STATE,
  action: any,
) {

  switch (action.type) {

    case ADD_TO_CART:

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          action.payload,
        ],
      };

    case REMOVE_FROM_CART:

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (_: any, index: number) =>
            index !== action.payload,
        ),
      };

    case CLEAR_CART:

      return INITIAL_STATE;

    default:
      return state;
  }
}