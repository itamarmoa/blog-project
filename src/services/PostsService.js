let $ = require("jquery");

class PostsService{
  constructor(){
    this.url = '../../data/posts.json';
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
    let posts = JSON.parse(localStorage.getItem("posts"));
    let post = posts.find( (post)=> post.title === title );
    return post
  }
}

export default PostsService = new PostsService();
