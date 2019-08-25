import { ADD_CART_ITEM } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, items: [...state.items, action.item] };

    default:
      return state;
  }
}
