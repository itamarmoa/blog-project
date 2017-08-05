import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import * as CONST from '../../constants';

import PostsList from './PostsLists';
import Pagger from './Pagger';
import {pullPosts,getPosts} from '../../services/actions';

class PostsFeed extends Component{
  constructor(props){
    super(props);
    this.query = queryString.parse(props.location.search);
    console.log(this.query);
    // this.props.getAllPosts();
  }
  componentDidMount(){
    if(!this.query.tag && !this.query.author){
      this.props.getPosts();
    }
    else if(this.query.tag){
      this.props.getPosts(CONST.TAG, this.query.tag);
    }
    else if(this.query.author){
      this.props.getPosts(CONST.AUTHOR, this.query.author);
    }

  }
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
    getAllPosts: ()=> dispatch(pullPosts()),
    getPosts: (by, query)=> dispatch(getPosts(by, query))
  }
}

let connected = connect(mapStateToProps,mapDispatchToProps)(PostsFeed);
export default withRouter(connected);
