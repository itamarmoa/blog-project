import React, {Component} from 'react';

import Post from './SinglePost/Post';
import PostsService from '../../services/PostsService';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';


export default class SinglePostPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <Post params={this.props.match.params}/>
          <Sidebar/>
        </div>
        <hr/>
        <Footer/>
      </div>
    )
  }
}
