import React, {Component} from 'react';
import Header from './Header';
import PostContent from './PostContent';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

export default class Post extends Component{
  constructor(props){
    super(props);
    this.comments = [
      {
        user: "Some User",
        date: "14 Jan, 2015",
        content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
        img: "http://placehold.it/64x64"
      },
      {
        user: "Some User",
        date: "14 Jan, 2015",
        content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
        img: "http://placehold.it/64x64"
      }
    ]
  }
  render(){
    return (
      <section className="col-md-8">
        <article>
          <Header {...this.props}/>
          <PostContent {...this.props}/>
        </article>
        <hr/>
        <CommentForm/>
        <hr/>
        <CommentsList comments={this.comments}/>
      </section>
    )
  }
}
