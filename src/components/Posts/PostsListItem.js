import React, {Component} from 'react';

export default class PostsListItem extends Component{
  constructor(props){
    super(props);
  }
  renderTag(tag){
    return (
      <span>
        <a className="label label-default" href="#">
          {tag}
        </a>
      </span>
    )
  }
  render(){
    return (
      <article>
        <header>
          <h2><a href="#">{this.props.title}</a></h2>
          <p><small className="glyphicon glyphicon-user" /> by <a href="#">{this.props.author}</a></p>
          <p><small className="glyphicon glyphicon-time" /> Posted on {this.props.postDate}</p>
        </header>
        <p>{this.props.description}</p>
        <footer className="clearfix">
          <p className="pull-left">
            <b>Tags:</b>
            {this.props.tags.map(this.renderTag)}
          </p>
          <a className="btn btn-primary pull-right" href="#">Read More <i className="glyphicon glyphicon-chevron-right"/></a>
        </footer>
        <hr/>
      </article>
    )
  }
}
