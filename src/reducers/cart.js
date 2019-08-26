import { ADD_CART_ITEM } from "../actions/types";

const initialState = {
  items: []
};

const findItem = (item, collection) => {
  let index = -1;
  const search = collection.filter((el, i) => {
    if (el.id === item.id) {
      index = i;
    }
    return true;
  });

  if (search.length === 0 || index === -1) {
    return -1;
  }

  return index;
};

const mergeItems = (newItem, itemsCollection) => {
  if (itemsCollection.length === 0) {
    return [newItem];
  }

  const index = findItem(newItem, itemsCollection);
  if (index === -1) {
    return [...itemsCollection, newItem];
  }

  const oldItem = itemsCollection[index];

  if (index === 0 && itemsCollection.length === 1) {
    return [{ ...oldItem, count: oldItem.count + newItem.count }];
  }

  return [
    ...itemsCollection.slice(0, index),
    { ...oldItem, count: oldItem.count + newItem.count },
    ...itemsCollection.slice(index + 1, itemsCollection.length)
  ];
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      let item = action.item;

      if (item.count === undefined) {
        item.count = 1;
      }

      return {
        ...state,
        items: mergeItems({ ...item }, state.items)
      };
    default:
      return state;
  }
}
