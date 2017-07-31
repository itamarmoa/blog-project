import * as ACTION from '../actions/index';

export default function PostsReducer(state = [], action){
  switch (action.type){
    case ACTION.GET_POSTS_RESPONSE:
      return action.posts
  }
  return state
}
