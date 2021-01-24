import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

let counterId = 5;
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
  counterId += 1;
  const newState = state;
  const newIds = [];
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        allIds: [...state.allIds, counterId],
        byIds: {
          ...state.byIds,
          [counterId]: {
            title: action.payload.title,
            category: action.payload.category,
          },
        },
      };
    case REMOVE_BOOK:
      newState.allIds.forEach(item => {
        if (item !== action.payload.id) {
          newIds.push(item);
        }
      });
      newState.allIds = newIds;
      delete newState.byIds[action.payload.id];
      return {
        allIds: [...newState.allIds],
        byIds: {
          ...newState.byIds,
        },
      };
    default:
      return state;
  }
};

export default books;
