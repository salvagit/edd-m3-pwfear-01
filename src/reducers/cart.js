import { ADD_CART_ITEM } from "../actions/types";

const INITIAL_STATE = {
  items: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, items: [...state.items, action.item] };
    default:
      return { ...state };
  }
}
