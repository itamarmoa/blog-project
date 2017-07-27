import React, {Component} from 'react';

import SideBar from '../Sidebar/Sidebar';

import PostsFeed from './PostsFeed';
import Footer from '../Footer/Footer';

export default class PostsPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <PostsFeed />
          <SideBar/>
        </div>
        <hr/>
        <Footer/>
      </div>
    )
  }
}
