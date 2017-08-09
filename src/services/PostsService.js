let $ = require("jquery");
import * as CONST from '../constants';

class PostsService{
  constructor(){
    // this.url = '../../data/posts.json';
    this.url = '/api/posts';
  }
  getAllPosts(){
    return $.get(this.url)
  }
  getPost(title){
    return $.get(this.url + '/?title='+ title);
  }
  getPosts(by, query){
    switch(by){
      case CONST.PAGE:
        return $.get(this.url + '/?'+ CONST.PAGE + '=' + query);
      case CONST.AUTHOR:
        return $.get(this.url + '/?'+ CONST.AUTHOR + '=' + query);
      case CONST.TAG:
        return $.get(this.url + '/?'+ CONST.TAG + '=' + query);
      case CONST.MONTH:
        return $.get(this.url + '/?'+ CONST.MONTH + '=' + query);
    }
    return $.get(this.url)
  }
  getSideBarValues(){
    return $.get(this.url + '/list/');
  }
}

export default PostsService = new PostsService();
