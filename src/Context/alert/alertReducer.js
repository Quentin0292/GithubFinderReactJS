import { SET_ALERT, REMOVE_ALERT, CLOSE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    case CLOSE_ALERT:
      return null;
    default:
      return state;
  }
};
