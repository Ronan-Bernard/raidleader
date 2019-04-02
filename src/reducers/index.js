import { combineReducers } from 'redux';
import commandesReducer from './commandes';
import raidGroupReducer from './raidGroup';

const reducers = combineReducers({
  commandesReducer,
  raidGroupReducer
})

export default reducers;
