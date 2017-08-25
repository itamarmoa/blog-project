import * as ACTION from '../actions/index';
import PostsService from './PostsService';
import FileService from './FileService';


export function getSidebarValues(){
  return dispatch =>{
    dispatch({type:ACTION.GET_SIDEBAR_VALUES_REQUEST});

    PostsService.getSideBarValues()
      .then(values => dispatch({ type: ACTION.GET_SIDEBAR_VALUES_RESPONSE, values}));
  }
}

export function getPosts(by, query){
  return dispatch =>{
    dispatch({type:ACTION.GET_POSTS_REQUEST});

    PostsService.getPosts(by, query)
      .then(posts => dispatch({ type: ACTION.GET_POSTS_RESPONSE, posts}));
  }
}

export function getPost(title){
  return dispatch =>{
    dispatch({type: ACTION.GET_CURRENT_POST_REQUEST});

    PostsService.getPost(title)
      .then(post => dispatch({ type: ACTION.GET_CURRENT_POST_RESPONSE, post }));

  }
}

export function getHTML(fileName){
  return dispatch =>{
    dispatch({type:ACTION.GET_CURRENT_POST_HTML_REQUEST});

    FileService.fetchExternalFile(fileName)
      .then(
        content => dispatch({type:ACTION.GET_CURRENT_POST_HTML_RESPONSE, content})
      );
  }
}

export function getMD(fileName){
  return dispatch =>{
    dispatch({type:ACTION.GET_CURRENT_POST_MD_REQUEST});

    FileService.fetchExternalFile(fileName)
      .then(
        content => dispatch({type:ACTION.GET_CURRENT_POST_MD_RESPONSE, content})
      );
  }
}

// export function getUserDetails(userId) {
//   return dispatch =>{
//     dispatch({type: ACTION.GET_USER_DETAILS_REQUEST});
//
//     UserService.getUser(userId)
//       .then(user => dispatch({type: ACTION.GET_USER_DETAILS_RESPONSE, user}));
//   }
// }

// export function getUserPosts(userId) {
//   return userId;
// }
