import * as ACTION from '../actions/index';
import PostsService from './PostsService';
import FileService from './FileService';


export function pullPosts(){
  return dispatch =>{
    dispatch({type: ACTION.GET_POSTS_REQUEST});

    PostsService.getAllPosts()
      .then(posts => dispatch({ type: ACTION.GET_POSTS_RESPONSE, posts }));
  }
}

export function getPost(title){
  return dispatch =>{
    dispatch({type: ACTION.GET_CURRENT_POST_REQUEST});

    // When it will be async
    PostsService.getPost(title)
      .then(post => dispatch({ type: ACTION.GET_CURRENT_POST_RESPONSE, post }));

    // Sync get
    // let post = PostsService.getPost(title);
    // if(post){
    //   dispatch({ type: ACTION.GET_CURRENT_POST_RESPONSE, post })
    // };
  }
}

export function getHTML(fileName){
  return dispatch =>{
    dispatch({type:ACTION.GET_CURRENT_POST_HTML_REQUEST});

    FileService.fetchExternalHTML(fileName)
      .then(
        content => dispatch({type:ACTION.GET_CURRENT_POST_HTML_RESPONSE, content})
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
