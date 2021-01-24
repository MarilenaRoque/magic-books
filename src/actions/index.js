import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

export const createBook = (title, category) => ({
  type: CREATE_BOOK,
  payload: {
    title,
    category,
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  theBook: {
    id: book.id,
  },
});
