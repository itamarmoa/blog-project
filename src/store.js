import { createStore, combineReducers, applyMiddleware} from 'redux';
import PostsReducer from './reducers/PostsReducer';
import currentPostReducer from './reducers/currentPostReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import Thunk from 'redux-thunk';

const state = {
  posts: [],
  currentPost: {
    header: null,
    content: ""
  }
};


const reducers = combineReducers({
  // Reducers go here
  posts: PostsReducer,
  currentPost: currentPostReducer
});

let middlewares = applyMiddleware(Thunk);

const store = createStore(
  reducers,
  state,
  composeWithDevTools(middlewares)
);

export default store;
