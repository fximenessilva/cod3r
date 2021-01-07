import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numeros(state, action) {
    return {
      min: 1,
      max: 10,
    };
  },
});
