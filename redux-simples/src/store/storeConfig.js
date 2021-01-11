/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createStore, combineReducers } from 'redux';

import numbersReducer from './reducers/numbersReducer';

const reducers = combineReducers({
  numbersReducer,
});

export default function storeConfig() {
  return createStore(reducers);
}
