let $ = require("jquery");

class PostsService{
  constructor(){
    // this.url = '../../data/posts.json';
    this.url = '/api/posts';
  }
  getAllPosts(){
    return $.get(this.url)
  }
  // pullPostsFromLocalS(){
  //   let posts = JSON.parse(localStorage.getItem("posts"));
  //   return posts
  // }
  getPostsRange(from, to){
    this.getAllPosts().then(  );
    let allPosts = this.getAllPosts();
    let sliced = allPosts.slice(from, to);
    return sliced
  }
  // getPost(title){
  //   let posts = this.pullPostsFromLocalS();
  //   let post = posts.find( (post)=> post.title === title );
  //   return post
  // }
  getPost(title){
    return $.get(this.url + '/?title='+ title);
  }
}

export default PostsService = new PostsService();
