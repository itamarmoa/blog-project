import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPost, getHTML} from '../../../services/actions';
import Header from './Header';
import PostContent from './PostContent';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

class Post extends Component{
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
        user: "Some Userit",
        date: "14 Jan, 2016",
        content: "Cras sit gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
        img: "http://placehold.it/64x64"
      }
    ]
    if(this.props.postHeader === null || props.params.id !== this.props.postHeader._id){
      this.props.getPost(props.params.id);
    }
  }
  componentWillUpdate(nextProps){
    if(this.props.postHeader !== nextProps.postHeader){
      this.loadHTML(nextProps.postHeader.htmlPath);
    }
  }
  loadHTML(path){
    this.props.getPostHTML(path);
  }
  render(){
    return (
      <section className="col-md-8">
        <article>
          <Header {...this.props.postHeader}/>
          <PostContent content={this.props.postHTML}/>
        </article>
        <hr/>
        <CommentForm/>
        <hr/>
        <CommentsList comments={this.comments}/>
      </section>
    )
  }
}

function mapStateToProps(state){
  return {
    postHeader: state.currentPost.header,
    postHTML: state.currentPost.content
  }
}
function mapDispatchToProps(dispatch){
  return{
    getPost: (id)=> dispatch(getPost(id)),
    getPostHTML: (fileName)=> dispatch(getHTML(fileName))
  }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(Post);
export default connected
