import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

const listingBooks = [
  {
    id: 1,
    title: 'A Promised Land',
    category: 'Biography',
  },
  {
    id: 2,
    title: 'Ambitious Girl',
    category: 'Kids',
  },
  {
    id: 3,
    title: 'Love you Forever',
    category: 'Kids',
  },
  {
    id: 4,
    title: 'Good Night Moon',
    category: 'Sci-Fi',
  },
  {
    id: 5,
    title: '1922',
    category: 'Horror',
  },
];

function removeBookFromState(id) {
  return function newState(book) {
    return book.id !== id;
  };
}

const books = (state = listingBooks, action) => {
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
