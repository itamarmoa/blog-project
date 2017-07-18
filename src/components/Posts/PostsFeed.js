import React, {Component} from 'react';

import PostsList from './PostsLists';
import Pagger from './Pagger';
import PostsService from '../../services/PostsService';

export default class PostsFeed extends Component{
  constructor(){
    super();
    this.state = {

    };
    this.getPosts();
  }
  getPosts(){
    PostsService
      .getAllPosts()
      .then(this.onPosts.bind(this));
  }
  onPosts({posts}){
    this.setState({posts});
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  render(){
    if(this.state.posts){
      return (
        <section className="col-md-8">
          <h2 className="page-header">Showing {this.state.posts.length} posts</h2>
          <PostsList posts={this.state.posts}/>
          <Pagger/>
        </section>
      )
    }
    return <h1>Loading...</h1>
  }
}
