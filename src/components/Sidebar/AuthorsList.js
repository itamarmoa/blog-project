import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class AuthorsList extends Component{
  constructor(props){
    super(props);
  }
  renderItem(item){
    let search = '?author='+item.name;
    return (
      <NavLink
        to={{
          search
        }}
        className="list-group-item"
        isActive={(match, location)=> location.search === search}
        key={item.name}
      >
        <span className="badge">{item.occur}</span>
        {item.name}
      </NavLink>
    )
  }

  render(){
    return (
      <div>
        <h4><small className="glyphicon glyphicon-user"/> Author</h4>
        <div className="list-group">
          {this.props.authors.map(this.renderItem)}
        </div>
      </div>
    )
  }
}
