import React, {Component} from 'react';
import TagList from './TagList';
import AuthorsList from './AuthorsList';
import MonthsList from './MonthsList';

export default class Filter extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="well">
        <h3>Filter Posts</h3>

        <div className="list-group">
          <a href="#" className="list-group-item active">
            <span className="badge">8</span>
            Show All Posts
          </a>
        </div>
        <TagList/>
        <AuthorsList/>
        <MonthsList/>


      </div>
    )
  }
}
