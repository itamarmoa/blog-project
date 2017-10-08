import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,Redirect} from 'react-router-dom';

import queryString from 'query-string';
import * as CONST from '../../constants';

import PostsList from './PostsLists';
import Pagger from './Pagger';

class PostsFeed extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    if(!this.props.location.search){
      this.props.history.push('/posts/?page=1');
    }
  }
  render(){
    if(this.props.posts){
      return (
        <section className="col-md-8">
          <h2 className="page-header">Showing {this.props.posts.length} posts</h2>
          <PostsList
            posts={this.props.posts.docs}
          />
          <Pagger
            totalPosts={this.props.posts.total}
            limit={this.props.posts.limit}
            // totalPages={this.props.posts.pages}
            current={this.props.posts.page}
          />
        </section>
      )
    }
    return (
      <section className="col-md-8">
        <h2 className="page-header">Loading...</h2>
      </section>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts,
    sidebar: state.sidebar
  }
}

let connected = connect(mapStateToProps,null)(PostsFeed);
export default withRouter(connected);
