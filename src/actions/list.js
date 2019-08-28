import {
  ADD_ELEMENT_START,
  ADD_ELEMENT_SUCCESS,
  ADD_ELEMENT_ERROR,
  REMOVE_ELEMENT
} from "./types";

export const onAddElementStart = () => ({ type: ADD_ELEMENT_START });
export const onAddElementSuccess = data => ({
  type: ADD_ELEMENT_SUCCESS,
  data
});
export const onAddElementError = error => ({ type: ADD_ELEMENT_ERROR, error });

export const onRemoveElement = element => ({
  type: REMOVE_ELEMENT,
  element
});

export const addElement = element => dispatch => {
  dispatch(onAddElementStart());
  try {
    console.log("ADDELEMENT ACTION", element);
    dispatch(onAddElementSuccess(element));
  } catch (e) {
    dispatch(onAddElementError(e));
  }
};

export const removeElement = element => dispatch => {
  dispatch(onRemoveElement(element));
};
