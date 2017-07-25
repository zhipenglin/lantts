import { combineReducers } from 'redux';
import page from './pageReducer';
import nav from './navReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  page,
  nav,
  router: routerReducer
});
