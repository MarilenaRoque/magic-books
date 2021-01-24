import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

// let idCounter = 5;
const listingBooks = {
  allIds: [1, 2, 3, 4, 5],
  byIds: {
    1: {
      title: 'A Promised Land',
      category: 'Biography',
    },
    2: {
      title: 'Ambitious Girl',
      category: 'Kids',
    },
    3: {
      title: 'Love you Forever',
      category: 'Kids',
    },
    4: {
      title: 'Good Night Moon',
      category: 'Sci-Fi',
    },
    5: {
      title: '1922',
      category: 'Horror',
    },
  },
};

const books = (state = listingBooks, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return state;
    case REMOVE_BOOK:
      return state;
    default:
      return state;
  }
};

export default books;
