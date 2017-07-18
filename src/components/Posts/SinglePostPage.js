import React, {Component} from 'react';
import Post from './SinglePost/Post';
import PostsService from '../../services/PostsService';
import Sidebar from '../Sidebar/Sidebar';
import Footer from './Footer';

export default class SinglePostPage extends Component{
  constructor({match}){
    super(match);
    this.post = PostsService.getPost(match.params.title);
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <Post {...this.post}/>
          <Sidebar/>
        </div>
        <hr/>
        <Footer/>
      </div>
    )
  }
}
