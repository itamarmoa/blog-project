import React, {Component} from 'react';

export default class CommentsList extends Component{
  constructor(props){
    super(props);
  }
  renderComment(comment){
    return (
      <div className="media">
        <a className="pull-left" href="#">
          <img className="media-object" src={comment.img} alt=""/>
        </a>
        <div className="media-body">
          <h4 className="media-heading">{comment.user}
            <small>{comment.date}</small>
          </h4>
          <p>{comment.content}</p>
        </div>
        <hr/>
      </div>
    )
  }
  render(){
    return (
      <div>
        {this.props.comments.map(this.renderComment)}
      </div>
    )
  }
}
