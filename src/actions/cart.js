import { ADD_CART_ITEM } from "./types";

export const onAddCartItem = item => ({ type: ADD_CART_ITEM, item });

export const addCartItem = item => dispatch => {
  dispatch(onAddCartItem(item));
};
