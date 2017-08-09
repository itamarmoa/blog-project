import React, {Component} from 'react';
import {connect} from 'react-redux';
import SideBar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import PostsEditList from './PostsEditList';
import {getPosts} from '../../services/actions';


class AdminPage extends Component{
  constructor(props){
    super(props);
    if(props.posts.length === 0 || props.posts === undefined)
      this.props.getAllPosts();
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <section className="col-md-8">
            <h2 className="page-header">Edit posts</h2>
            <PostsEditList posts={this.props.posts}/>
          </section>
          <SideBar/>
        </div>
        <hr/>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}
function mapDispatchToProps(dispatch){
  return {
    getAllPosts: ()=> dispatch(getPosts())
  }
}

let connected = connect(mapStateToProps,mapDispatchToProps)(AdminPage);
export default connected;
