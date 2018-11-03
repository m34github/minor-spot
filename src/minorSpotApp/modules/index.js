import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import spot from './spot';

const rootReducer = combineReducers({
  spot
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
