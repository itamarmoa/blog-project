import {combineReducers} from 'redux';
import * as ACTION from '../actions/index';

function currentPostReducerHeader(state = null, action){
  switch (action.type){
    case ACTION.GET_CURRENT_POST_RESPONSE:
      return action.post
  }
  return state
}

function htmlCurrentPostReducer(state = "", action) {
  switch (action.type){
    case ACTION.GET_CURRENT_POST_HTML_RESPONSE:
      return action.content
  }
  return state
}

let currentPostReducer = combineReducers({
  header: currentPostReducerHeader,
  content: htmlCurrentPostReducer
});

export default currentPostReducer;
