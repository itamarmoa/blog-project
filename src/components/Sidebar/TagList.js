import React, {Component} from 'react';
import {withRouter, NavLink} from 'react-router-dom';

export default class TagList extends Component{
  constructor(props){
    super(props);
  }
  renderItem(tag){
    let search = ('?tag='+tag.name);
    return (
      <NavLink
        exact
        to={{
          search
        }}
        className="list-group-item"
        key={tag.name}
        isActive={(match, location)=> location.search === search}
      >
        <span className="badge">{tag.occur}</span>
        {tag.name}
      </NavLink>
    )
  }
  render(){
    return (
      <div>
        <h4><small className="glyphicon glyphicon-tag" /> Category</h4>
        <div className="list-group">
          {this.props.tags.map(this.renderItem)}
        </div>
      </div>
    )
  }
}
