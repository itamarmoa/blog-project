import React, {Component} from 'react';
import PostsService from '../../services/PostsService';
import SideBar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import PostsEditList from './PostsEditList';

export default class AdminPage extends Component{
  constructor(){
    super();
    this.posts = PostsService.pullPostsFromLocalS();
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <section className="col-md-8">
            <h2 className="page-header">Edit posts</h2>
            <PostsEditList posts={this.posts}/>
          </section>
          <SideBar/>
        </div>
        <hr/>
        <Footer/>
      </div>
    )
  }
}
