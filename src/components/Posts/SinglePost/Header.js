import React, {Component} from 'react';
import convertTimestamp from '../../../services/convertTimestamp';
import Tags from '../Tags';

export default class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>
        <h1 className="page-header">{this.props.title}</h1>

        <p>
          <small className="glyphicon glyphicon-user"/>
          by <a href="#">{this.props.author}</a>
        </p>
        <p>
          <small className="glyphicon glyphicon-time"/>
          Posted on {convertTimestamp(this.props.date)}
        </p>
        <p>
          <Tags tags={this.props.tags}/>
        </p>
      </header>
    )
  }
}
