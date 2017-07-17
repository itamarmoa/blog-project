import React, {Component} from 'react';
import PostsListItem from './PostsListItem';
import Pagger from './Pagger';
import Footer from './Footer';

export default class Posts extends Component{
  constructor(){
    super();
    this.posts = [
      1,2,3,4,5
    ]
  }
  renderItem(i){
    return (<PostsListItem key={i}/>)
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <section className="col-md-5">
            <h2 className="page-header">Showing {this.posts.length} posts</h2>
            {this.posts.map( this.renderItem )}
            <Pagger/>
          </section>
          <hr/>
          <Footer/>
        </div>
      </div>
    )
  }
}
