import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import studentsReducer from './studentsReducer';

const rootReducer = combineReducers({
  students: studentsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

