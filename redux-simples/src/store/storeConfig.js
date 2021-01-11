/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createStore, combineReducers } from 'redux';
import actionTypes from './actions/actionTypes';

const reducers = combineReducers({
  numeros(state, action) {
    switch (action.type) {
      case actionTypes.NUM_MIN_ALTERADO:
        return { ...state, min: action.payload };
      case actionTypes.NUM_MAX_ALTERADO:
        return { ...state, max: action.payload };

      default:
        return {
          min: 7,
          max: 33,
        };
    }
  },
  nomes(state, action) {
    console.log('Reducer Nomes...');
    console.log(state, ' ', action);
    return [
      'Ana',
      'Joao',
      'Carlos',
    ];
  },
});

export default function storeConfig() {
  return createStore(reducers);
}
