import React, {Component} from 'react';
import {connect} from 'react-redux';

import PostsList from './PostsLists';
import Pagger from './Pagger';
import PostsService from '../../services/PostsService';
import {pullPosts} from '../../services/actions';

class PostsFeed extends Component{
  constructor(props){
    super(props);
    this.props.getAllPosts();
  }
  // getPosts(){
  //   PostsService
  //     .getAllPosts()
  //     .then(this.onPosts.bind(this));
  // }
  // onPosts({posts}){
  //   this.setState({posts});
  //   localStorage.setItem("posts", JSON.stringify(posts));
  // }
  render(){
    if(this.props.posts){
      return (
        <section className="col-md-8">
          <h2 className="page-header">Showing {this.props.posts.length} posts</h2>
          <PostsList posts={this.props.posts}/>
          <Pagger/>
        </section>
      )
    }
    return (
      <section className="col-md-8">
        <h2 className="page-header">Loading</h2>
      </section>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts,
    currentPost: state.currentPost
  }
}
function mapDispatchToProps(dispatch){
  return {
    getAllPosts: ()=> dispatch(pullPosts())
  }
}

let connected = connect(mapStateToProps,mapDispatchToProps)(PostsFeed);
export default connected;
