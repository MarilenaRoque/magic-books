import { CHANGE_FILTER } from '../constants';

const defaultState = 'all';

const filter = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default filter;
