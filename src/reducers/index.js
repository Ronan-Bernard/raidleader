import { combineReducers } from 'redux';
import commandesReducer from './commandes';
import recrutementReducer from './recrutement';
import raidReducer from './raid';

const reducers = combineReducers({
  commandesReducer,
  recrutementReducer,
  raidReducer
})

export default reducers;
