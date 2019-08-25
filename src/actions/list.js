import {
  ADD_ELEMENT_START,
  ADD_ELEMENT_SUCCESS,
  ADD_ELEMENT_ERROR
} from "./types";

export const onAddElementStart = () => ({ type: ADD_ELEMENT_START });
export const onAddElementSuccess = data => ({
  type: ADD_ELEMENT_SUCCESS,
  data
});
export const onAddElementError = error => ({ type: ADD_ELEMENT_ERROR, error });

export const addElement = element => dispatch => {
  dispatch(onAddElementStart());
  try {
    dispatch(onAddElementSuccess(element));
  } catch (e) {
    dispatch(onAddElementError(e));
  }
};
