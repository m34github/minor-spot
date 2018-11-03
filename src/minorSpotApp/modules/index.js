import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import login from './login';
import spot from './spot';

const rootReducer = combineReducers({
  login,
  spot
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
