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
  getPostsRange(from, to){
    this.getAllPosts().then(  );
    let allPosts = this.getAllPosts();
    let sliced = allPosts.slice(from, to);
    return sliced
  }
  getPost(title){
    return $.get(this.url + '/?title='+ title);
  }
  getPosts(by, query){
    switch(by){
      case CONST.AUTHOR:
        return $.get(this.url + '/?'+ CONST.AUTHOR + '=' + query)
      case CONST.TAG:
        return $.get(this.url + '/?'+ CONST.TAG + '=' + query)
    }
    return $.get(this.url)
  }
}

export default PostsService = new PostsService();
