import { combineReducers } from 'redux';
import { getInfo, infoHasErrored, infoIsLoading } from './info';

export default combineReducers({
  getInfo,
  infoHasErrored,
  infoIsLoading
});
