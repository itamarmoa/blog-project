import { createStore, combineReducers, applyMiddleware} from 'redux';
import PostsReducer from './reducers/PostsReducer';
import sideBarReducer from './reducers/sidebarReducer';
import currentPostReducer from './reducers/currentPostReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import Thunk from 'redux-thunk';

const state = {
  posts: [],
  sidebar: {
    totalPosts: null,
    tags: [],
    authors: [],
    months: []
  },
  currentPost: {
    header: null,
    content: {
      html: "",
      md: ""
    }
  }
};


const reducers = combineReducers({
  // Reducers go here
  posts: PostsReducer,
  sidebar: sideBarReducer,
  currentPost: currentPostReducer
});

let middlewares = applyMiddleware(Thunk);

const store = createStore(
  reducers,
  state,
  composeWithDevTools(middlewares)
);

export default store;
