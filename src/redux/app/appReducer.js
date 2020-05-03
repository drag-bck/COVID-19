import {SET_DARK_MODE} from './actionTypes';

const initialState = {
    darkMode: false
};

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_DARK_MODE:
        return {
          ...state,
          darkMode: !state.darkMode
        };
      default:
        return state;
    }
  };