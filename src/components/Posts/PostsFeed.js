import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,Redirect} from 'react-router-dom';


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
    posts: state.posts
  }
}

let connected = connect(mapStateToProps,null)(PostsFeed);
export default withRouter(connected);
