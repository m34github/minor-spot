import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import login from './login';
import password from './password';
import personal from './personal';

const rootReducer = combineReducers({
  login,
  password,
  personal
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
