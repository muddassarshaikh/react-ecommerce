import { types } from './cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case types.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    case types.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
