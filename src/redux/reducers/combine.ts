import { combineReducers } from 'redux';
import postReducer from './index';

const reducers = combineReducers({
  posts: postReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
