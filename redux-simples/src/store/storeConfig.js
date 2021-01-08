/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numeros(state, action) {
    console.log('Reducer Numeros...');
    console.log(state, ' ', action);
    return {
      min: 7,
      max: 31,
    };
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
