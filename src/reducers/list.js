import {
  ADD_ELEMENT_START,
  ADD_ELEMENT_SUCCESS,
  ADD_ELEMENT_ERROR,
  REMOVE_ELEMENT
} from "../actions/types";

const initialState = {
  elements: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT_START:
      return { ...state };
    case ADD_ELEMENT_SUCCESS:
      return { ...state, elements: [...state.elements, action.data] };
    case ADD_ELEMENT_ERROR:
      return { ...state };

    case REMOVE_ELEMENT:
      const elements = state.elements.filter(el => el !== action.element);
      return { ...state, elements };

    default:
      return state;
  }
}
