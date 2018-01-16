import { combineReducers } from 'redux';
import { info, infoHasErrored, infoIsLoading } from './info';

export default combineReducers({
  info,
  infoHasErrored,
  infoIsLoading
});
