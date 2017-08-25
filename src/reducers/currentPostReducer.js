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

function mdCurrentPostReducer(state = "", action) {
  switch (action.type){
    case ACTION.GET_CURRENT_POST_MD_RESPONSE:
      return action.content
  }
  return state
}

let contentReducers = combineReducers({
  html: htmlCurrentPostReducer,
  md: mdCurrentPostReducer
});

let currentPostReducer = combineReducers({
  header: currentPostReducerHeader,
  content: contentReducers
});

export default currentPostReducer;
