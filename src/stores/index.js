import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';

const store = createStore(
  combineReducers({
    auth: authReducer,
  })
);

export default store;
