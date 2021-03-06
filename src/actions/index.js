import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../constants';

let idCounter = 5;

export const createBook = book => {
  idCounter += 1;
  const actionObject = {
    type: CREATE_BOOK,
    payload: {
      id: idCounter,
      title: book.title,
      category: book.category,
    },
  };
  return actionObject;
};

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: {
    id: book.id,
  },
});

export const handleFilterChange = filter => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },
});
