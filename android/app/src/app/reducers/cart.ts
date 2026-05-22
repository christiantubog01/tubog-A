import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../actions/cart';

type CartItem = {
  id: number;
  product_name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const INITIAL_STATE: CartState = {
  items: [],
};

export default function cartReducer(
  state = INITIAL_STATE,
  action: any
): CartState {
  switch (action.type) {

case ADD_TO_CART: {

  const product = action.payload;

  const existing = state.items.find(
    (item) => item.id === product.id
  );

  // IF PRODUCT ALREADY EXISTS
  if (existing) {

    return {
      ...state,
      items: state.items.map((item) =>

        item.id === product.id

          ? {
              ...item,
              quantity:
                item.quantity + product.quantity,
            }

          : item
      ),
    };
  }

  // NEW PRODUCT
  return {
    ...state,
    items: [
      ...state.items,
      {
        ...product,
        quantity: product.quantity,
      },
    ],
  };
}

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload
        ),
      };

    case CLEAR_CART:
      return INITIAL_STATE;

    default:
      return state;
  }
}