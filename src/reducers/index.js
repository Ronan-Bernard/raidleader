import { combineReducers } from 'redux';
import commandesReducer from './commandes';
import recrutementReducer from './recrutement';
import raidReducer from './raid';
import raidGroupReducer from './raidGroup';

const reducers = combineReducers({
  commandesReducer,
  recrutementReducer,
  raidReducer,
  raidGroupReducer
})

export default reducers;
