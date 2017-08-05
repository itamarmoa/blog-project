import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Tags from './Tags';
import {convertTimestamp} from '../../services/Dater';

export default class PostsListItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <article>
        <header>
          <h2>
            <Link to={'/post/'+this.props.title}>
              {this.props.title}
            </Link>
          </h2>
          <p><small className="glyphicon glyphicon-user" /> by <a href="#">{this.props.author}</a></p>
          <p><small className="glyphicon glyphicon-time" /> Posted on {convertTimestamp(this.props.date)}</p>
        </header>
        <p>{this.props.description}</p>
        <br/>
        <footer className="clearfix">
          <div className="pull-left">
            <Tags tags={this.props.tags}/>
          </div>
          <Link className="btn btn-primary pull-right" to={'/post/'+this.props.title}>Read More <i className="glyphicon glyphicon-chevron-right"/></Link>
        </footer>
        <hr/>
      </article>
    )
  }
}
