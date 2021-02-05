import { CREATE_BOOK, REMOVE_BOOK } from '../constants';

const booksInitialState = {
  books: [],
  status: null,
  error: null,
};

const removeBookFromState = id => {
  const newState = book => book.id !== id;
  return newState;
};

const books = (state = booksInitialState, action) => {
  let newState = [];
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      newState = state.filter(removeBookFromState(action.payload.id));
      return newState;
    default:
      return state;
  }
};

export default books;
